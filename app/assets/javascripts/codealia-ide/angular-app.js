//= require jquery
//= require ace/ace
//= require ace/mode-html
//= require ace/mode-css
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
  }
]);
