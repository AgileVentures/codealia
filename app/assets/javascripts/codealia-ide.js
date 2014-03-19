var editor;
(function() {

  function evaluateRaw(code, print) {
    eval(code);
  }

  (function() {
    var codeOutput, output, isExecuting;

    function print(input) {
      output += input.toString() + "\n";
      if (!isExecuting) {
        display();
      }
    }

    function display() {
      codeOutput.innerText = output;
      codeOutput.scrollTop = codeOutput.scrollHeight;
    }

    function evaluateCode(editor) {
      var code = editor.getSession().getValue();
      output = "";
      isExecuting = true;
      try {
        evaluateRaw(code, print);
      } catch(e) {
        // do something smart
      }
      isExecuting = false;
      display();

      return true;
    }

    window.onload = function() {
      // can experiment with themes here: http://ace.c9.io/build/kitchen-sink.html
      editor = ace.edit("editor");
      editor.setTheme("ace/theme/dreamweaver");
      editor.setFontSize(14);
      editor.getSession().setMode("ace/mode/javascript");

      codeOutput = document.getElementById("code-output");

      editor.commands.addCommand({
        name: "run",
        bindKey: {
          win: "Shift-Enter",
          mac: "Command-Enter"
        },
        exec: evaluateCode
      });
    }
  })();
})();