//= require ace/ace

var Codealia = {};

Codealia.IDE = function(options) {
  this._isExecuting = false;
  this._outputBuffer = '';
  this._output = $('#' + options.output);

  // raw evaluation function
  this._evaluateRaw = function(code, print) {
    eval(code);
  };

  this._print = (function(caller) {
    return function(input) {
      caller.__proto__.print.call(caller, input);
    };
  })(this);

  this._refresh = (function(caller) {
    return function() {
      caller.__proto__.refresh.call(caller);
    };
  })(this);

  this._evaluateCode = function(editor) {
    var code = editor.getSession().getValue();
    this._outputBuffer = '';
    this._isExecuting = true;
    try {
      this._evaluateRaw(code, this._print);
    } catch(e) {
      window.console.log(e);
    }
    this._isExecuting = false;
    this._refresh();

    return true;
  };

  this._editor = ace.edit(options.editor);
  this._editor.setTheme(options.editorTheme || "ace/theme/chrome");
  this._editor.setFontSize(options.fontSize || 14);
  this._editor.getSession().setMode("ace/mode/javascript");

  this._editor.commands.addCommand({
    name: "run",
    bindKey: {
      win: "Shift-Enter",
      mac: "Command-Enter"
    },
    exec: (function(caller) {
      return function(editor) {
        caller._evaluateCode.call(caller, editor);
      };
    })(this)
  });
};

Codealia.IDE.prototype.print = function(input) {
  this._outputBuffer += input.toString() + "\n";
  if (!this._isExecuting) {
    this.refresh();
  }
};

Codealia.IDE.prototype.refresh = function() {
  // TODO do this the jQuery way
  this._output[0].innerText = this._outputBuffer;
  this._output[0].scrollTop = this._output[0].scrollHeight;
};