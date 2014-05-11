describe('ContainerController', function() {
  var $scope, controller, element;

  beforeEach(module('Codealia'));
  beforeEach(inject(function($controller) {
    $scope = {};
    controller = $controller('ContainerController', { $scope: $scope });
  }));

  beforeEach(function() {
    setFixtures('<div><div id="passions-editor"></div></div>')
    element = $('div > div#passions-editor')
  });

  describe('makeEditable()', function() {
    var updateEditorSpy;

    beforeEach(function() {
      updateEditorSpy = spyOn($scope, "updateEditor");
      controller.makeEditable($scope, element);
    });

    it('sets the preview attribute on the $scope object', function() {
      expect($scope.preview).toEqual(element);
    });

    it("should update the contents of the editor", function() {
      expect(updateEditorSpy).toHaveBeenCalled();
    });
  });

  describe("setEditor()", function() {
    var aceSpy, updateEditorSpy;

    beforeEach(function() {
      aceSpy = spyOn(ace, "edit").and.callThrough();
      updateEditorSpy = spyOn($scope, "updateEditor");
      controller.setEditor($scope, element.parent());
    });

    it("should set the editor attribute on the $scope object", function() {
      expect($scope.editor).toBeDefined();
    });

    it("should call ace.edit with the #passions-editor element", function() {
      expect(aceSpy).toHaveBeenCalledWith(element[0]);
    });

    it("should register $scope.updatePreview to the on change event", function() {
      var onEventSpy = spyOn($scope.editor.getSession(), "on");
      $scope.initializeEditor();
      expect(onEventSpy).toHaveBeenCalledWith("change", $scope.updatePreview);
    });

    it("should update the contents of the editor", function() {
      expect(updateEditorSpy).toHaveBeenCalled();
    });
  });

  describe("updatePreview()", function() {
    describe("without a preview", function() {
      beforeEach(function() {
        $scope.preview = null;
        controller.setEditor({}, element.parent());
      });

      it("should not throw an exception", function() {
        expect($scope.updatePreview).not.toThrow();
      });
    });

    describe("without an editor", function() {
      beforeEach(function() {
        controller.makeEditable({}, element);
        $scope.editor = null;
      });

      it("should not throw an exception", function() {
        expect($scope.updatePreview).not.toThrow();
      });
    });

    describe("with a preview and editor defined", function() {
      beforeEach(function() {
        appendSetFixtures('<div><div id="editable"></div></div>')
        var el = $("div > #editable");
        controller.setEditor({}, element.parent());
        controller.makeEditable({}, el.parent());
        el.html("");
        $scope.updatePreview();
      });

      it("should update the contents of the preview", function() {
        expect($scope.preview.html()).toEqual($scope.editor.getValue());
      });
    });
  });

  describe("updateEditor()", function() {
    describe("without a preview", function() {
      beforeEach(function() {
        $scope.preview = null;
        controller.setEditor({}, element.parent());
      });

      it("should not throw an exception", function() {
        expect($scope.updateEditor).not.toThrow();
      });
    });

    describe("without an editor", function() {
      beforeEach(function() {
        controller.makeEditable({}, element);
        $scope.editor = null;
      });

      it("should not throw an exception", function() {
        expect($scope.updateEditor).not.toThrow();
      });
    });


    describe("with a preview and editor defined", function() {
      beforeEach(function() {
        appendSetFixtures('<div><div id="editable"></div></div>')
        var el = $("div > #editable");
        controller.setEditor({}, element.parent());
        controller.makeEditable({}, el);
        el.html("hello there");
        $scope.updateEditor();
      });

      it("should update the contents of the editor", function() {
        expect($scope.editor.getValue()).toEqual("hello there");
      });
    });
  });
});
