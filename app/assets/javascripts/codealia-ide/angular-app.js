//= require jquery
//= require ace/ace
//= require ace/worker-html
//= require ace/mode-html
//= require ace/worker-css
//= require ace/mode-css
//= require ace/worker-javascript
//= require ace/mode-javascript
//= require ace/theme-chrome
//= require angular.min
//= require angular-route.min
//= require_self
//= require_tree .

window.CodealiaApp = angular.module("Codealia", [ "ngRoute" ]);

CodealiaApp.controller("LessonsController", [ "$rootScope", "$scope", "$routeParams",
  function($rootScope, $scope, $routeParams) {
    $scope.generatePreview = $scope.generatePreview || function(editor) {
      $scope.preview.contents().find("body").html(editor.getValue());
    }

    $scope.init = $scope.init || function() {
      $scope.preview = $("#page-preview");

      $scope.editor = ace.edit("editor");
      editor = $scope.editor;

      editor.setTheme("ace/theme/chrome");
      editor.setFontSize(14);
      editor.getSession().setMode("ace/mode/html");
      editor.setHighlightActiveLine(false);
      editor.setShowPrintMargin(false);
      editor.commands.addCommand({
        name: "preview",
        bindKey: {
          win: "Shift-Enter",
          mac: "Shift-Enter"
        },
        exec: $scope.generatePreview
      });

      editor.getSession().on("change", function(e) {
        $scope.generatePreview(editor);
      });
    }
  }
]);
