//= require ace/ace

var Codealia = {};

Codealia.IDE = function(options) {
  this._isExecuting = false;
  this._outputBuffer = '';
  this._output = $('#' + options.output);

  // raw evaluation function
  function evaluateRaw(code, log) {
    eval(code);
  }

  this.log = function(input) {
    this._outputBuffer += input.toString() + "\n";
    if (!this._isExecuting) {
      this.refresh();
    }
  };

  this.refresh = function() {
    // TODO do this the jQuery way
    this._output[0].innerText = this._outputBuffer;
    this._output[0].scrollTop = this._output[0].scrollHeight;
  };

  this.evaluate = function(code) {
    evaluateRaw(code, this.log.bind(this));
  };

  this._evaluateCode = function(editor) {
    var code = editor.getSession().getValue();
    this._outputBuffer = '';
    this._isExecuting = true;
    try {
      this.evaluate(code);
    } catch(e) {
      window.console.log(e);
    }
    this._isExecuting = false;
    this.refresh();

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