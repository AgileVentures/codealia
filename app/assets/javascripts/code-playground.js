//= require codealia-ide/ide

$(function() {
  Codealia.ide = new Codealia.IDE({
    editor: 'editor',
    output: 'code-output',
    // can experiment with themes here: http://ace.c9.io/build/kitchen-sink.html
    editorTheme: 'ace/theme/chrome',
    fontSize: 14
  });
});