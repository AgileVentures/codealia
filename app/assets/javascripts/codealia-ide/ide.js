//= require ace/ace
//= require angular.min
//= require angular-route.min

var app = angular.module("CodealiaIDE", [ 'ngRoute' ]);

app.config([ '$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/lessons/:lessonId', {
      template: function(params) {
        return '<h2>Lesson ' + params.lessonId + '</h2>';
      },
      controller: 'LessonsController'
    }).
      otherwise({
      redirectTo: '/lessons/1'
    });
  }
]);

app.controller('LessonsController', [ '$scope', '$routeParams',
  function($scope, $routeParams) {
    console.log($routeParams);

    $scope.generatePreview = function(editor) {
      $scope.preview.src = 'data:text/html;charset=utf-8,' + editor.getValue();
    }

    $scope.setLang = function(lang) {
      console.log(lang);
    }

    $scope.init = function() {
      $scope.editor = ace.edit('editor');
      $scope.preview = document.getElementById('page-preview');
      var editor = $scope.editor;

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

      editor.getSession().on('change', function(e) {
        $scope.generatePreview(editor);
      });
    }
  }
]);
