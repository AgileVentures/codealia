describe("Codealia's awesome in-browser IDE", function() {
  var scope, rootScope, controller;

  beforeEach(module('CodealiaIDE'));
  beforeEach(inject(function($controller) {
    rootScope = {};
    scope = {};
    controller = $controller('LessonsController', { $rootScope: rootScope, $scope: scope });
  }));

  it('should define an init function', function() {
    expect(scope.init).toBeDefined();
  });

  it('should define a lessonId variable in the rootScope', function() {
    expect(rootScope.lessonId).toBeDefined();
  });
//   beforeEach(function() {
//     loadFixtures('ide_fixture.html');
//     this.ide = new Codealia.IDE({
//       editor: 'editor',
//       output: 'code-output'
//     });
// 
//     this.editor = $('#editor');
//     this.output = $('#code-output');
//   });
// 
//   it('should be able to print text using a log function', function() {
//     this.ide.log('Hello World!');
// 
//     expect(this.output).toContainText('Hello World!');
//   });
// 
//   it('should be able to evaluate a simple piece of code', function() {
//     this.ide.evaluate('var i = 0; log(i + 100);');
// 
//     expect(this.output).toContainText('100');
//   });
});
