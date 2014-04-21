//= require ace/ace
//= require angular.min

var app = angular.module("CodealiaIDE", []);

function CodealiaIDEController($scope) {
  var editor = ace.edit('editor');
  var preview = document.getElementById('page-preview');

  $scope.generatePreview = function(editor) {
    preview.src = 'data:text/html;charset=utf-8,' + editor.getValue();
  }

  editor.setTheme("ace/theme/chrome");
  editor.setFontSize(14);
  editor.getSession().setMode("ace/mode/html");
  editor.commands.addCommand({
    name: "preview",
    bindKey: {
      win: "Shift-Enter",
      mac: "Shift-Enter"
    },
    exec: $scope.generatePreview
  });
}
