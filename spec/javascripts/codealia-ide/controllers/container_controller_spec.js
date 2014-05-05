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

  describe("setEditor()", function() {
    var aceSpy;

    beforeEach(function() {
      aceSpy = spyOn(ace, "edit").and.callThrough();
      controller.setEditor(scope, element.parent());
    });

    it("should set the editor attribute on the scope object", function() {
      expect(scope.editor).toBeDefined();
    });

    it("should call ace.edit with the #passions-editor element", function() {
      expect(aceSpy).toHaveBeenCalledWith(element[0]);
    });

    it("should register $scope.generatePreview to the on change event", function() {
      var onEventSpy = spyOn(scope.editor.getSession(), "on");
      scope.initializeEditor();
      expect(onEventSpy).toHaveBeenCalledWith("change", scope.generatePreview);
    });

    it("copies html into the editor from the editable region if such a region is defined", function() {
      editorSpy = spyOn(scope.editor, 'setValue').and.callThrough();
      controller.setEditor(scope, element.parent());
      expect(editorSpy).not.toHaveBeenCalled();
      scope.preview = element;
      controller.setEditor(scope, element.parent());
      expect(editorSpy).toHaveBeenCalledWith(element);
    });
  });

  it('sets html in the preview if a preview and editor are defined', function() {
    var htmlSpy = spyOn(scope.preview, 'html');
  });
})
