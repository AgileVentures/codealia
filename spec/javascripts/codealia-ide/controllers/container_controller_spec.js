describe('ContainerController', function() {
  var scope, controller, element;

  beforeEach(module('Codealia'));
  beforeEach(inject(function($controller) {
    scope = {};
    controller = $controller('ContainerController', { $scope: scope });
  }));
  beforeEach(function() {
    setFixtures('<div><div id="passions-editor"></div></div>')
    element = $('div > div#passions-editor')
  });

  describe('makeEditable()', function() {
    beforeEach(function() {
      controller.makeEditable(scope, element);
    });

    it('sets the preview attribute on the scope object', function() {
      expect(scope.preview).toEqual(element);
    });
  });

  it('sets html in the preview if a preview and editor are defined', function() {
    var htmlSpy = spyOn(scope.preview, 'html');
  });
})
