describe("EditorsFactory", function() {
  var factory, element;

  beforeEach(module('Codealia'));
  beforeEach(inject(function($injector) {
    factory = $injector.get("EditorsFactory");
  }));

  it('cdl-preview works', inject(function($rootScope, $compile){
    var elm = angular.element('<div cdl-preview>HELLO</div>')
    $compile(elm)($rootScope.$new());
    expect(factory.preview.html()).toEqual('HELLO');
  }));

  it('cdl-editor works', inject(function($rootScope, $compile, $injector){
    $templateCache = $injector.get('$templateCache');
    $templateCache.put('/templates/passions-editor', '<div id="passions-editor"></div>');
    var scope = $rootScope
    var elm = angular.element('<div cdl-preview>HELLO</div>')
    $compile(elm)(scope);
    var elm = angular.element('<div cdl-passions-editor></div>')
    $compile(elm)(scope);
    scope.$digest();
    expect(factory.editor.getValue()).toEqual(factory.preview.html());
  }));
//  beforeEach(function() {
//    var body = angular.element($document[0].body);
//    var fixture = angular.element('<div><div id="passions-editor"></div></div>');
//    body.append(fixture);
//
//    element = $('div > div#passions-editor')
//  });
//
//  describe('makeEditable()', function() {
//    var updateEditorSpy;
//
//    beforeEach(function() {
//      updateEditorSpy = spyOn(factory, "updateEditor");
//      factory.makeEditable(factory, element);
//    });
//
//    it('sets the preview attribute on the factory object', function() {
//      expect(factory.preview).toEqual(element);
//    });
//
//    it("should update the contents of the editor", function() {
//      expect(updateEditorSpy).toHaveBeenCalled();
//    });
//  });
//
//  describe("setEditor()", function() {
//    var aceSpy, updateEditorSpy;
//
//    beforeEach(function() {
//      aceSpy = spyOn(ace, "edit").and.callThrough();
//      updateEditorSpy = spyOn(factory, "updateEditor");
//      factory.setEditor(factory, element.parent());
//    });
//
//    it("should set the editor attribute on the factory object", function() {
//      expect(factory.editor).toBeDefined();
//    });
//
//    it("should call ace.edit with the #passions-editor element", function() {
//      expect(aceSpy).toHaveBeenCalledWith(element[0]);
//    });
//
//    it("should register factory.updatePreview to the on change event", function() {
//      var onEventSpy = spyOn(factory.editor.getSession(), "on");
//      factory.initializeEditor();
//      expect(onEventSpy).toHaveBeenCalledWith("change", factory.updatePreview);
//    });
//
//    it("should update the contents of the editor", function() {
//      expect(updateEditorSpy).toHaveBeenCalled();
//    });
//  });
//
//  describe("updatePreview()", function() {
//    describe("without a preview", function() {
//      beforeEach(function() {
//        factory.preview = null;
//        factory.setEditor({}, element.parent());
//      });
//
//      it("should not throw an exception", function() {
//        expect(factory.updatePreview).not.toThrow();
//      });
//    });
//
//    describe("without an editor", function() {
//      beforeEach(function() {
//        factory.makeEditable({}, element);
//        factory.editor = null;
//      });
//
//      it("should not throw an exception", function() {
//        expect(factory.updatePreview).not.toThrow();
//      });
//    });
//
//    describe("with a preview and editor defined", function() {
//      beforeEach(function() {
//        appendSetFixtures('<div><div id="editable"></div></div>')
//        var el = $("div > #editable");
//        factory.setEditor({}, element.parent());
//        factory.makeEditable({}, el.parent());
//        el.html("");
//        factory.updatePreview();
//      });
//
//      it("should update the contents of the preview", function() {
//        expect(factory.preview.html()).toEqual(factory.editor.getValue());
//      });
//    });
//  });
//
//  describe("updateEditor()", function() {
//    describe("without a preview", function() {
//      beforeEach(function() {
//        factory.preview = null;
//        factory.setEditor({}, element.parent());
//      });
//
//      it("should not throw an exception", function() {
//        expect(factory.updateEditor).not.toThrow();
//      });
//    });
//
//    describe("without an editor", function() {
//      beforeEach(function() {
//        factory.makeEditable({}, element);
//        factory.editor = null;
//      });
//
//      it("should not throw an exception", function() {
//        expect(factory.updateEditor).not.toThrow();
//      });
//    });
//
//    describe("with a preview and editor defined", function() {
//      beforeEach(function() {
//        appendSetFixtures('<div><div id="editable"></div></div>')
//        var el = $("div > #editable");
//        factory.setEditor({}, element.parent());
//        factory.makeEditable({}, el);
//        el.html("hello there");
//        factory.updateEditor();
//      });
//
//      it("should update the contents of the editor", function() {
//        expect(factory.editor.getValue()).toEqual("hello there");
//      });
//    });
//  });
});
