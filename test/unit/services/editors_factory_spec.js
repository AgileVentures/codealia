describe("EditorsFactory", function() {
  var factory, element, previewScope, editorScope, previewElem, editorElem;

  beforeEach(module('Codealia'));
  beforeEach(inject(function($rootScope, $compile, EditorsFactory, $templateCache) {
    previewScope = $rootScope.$new();
    editorScope = $rootScope.$new();
    factory = EditorsFactory;
    $templateCache.put('/templates/passions-editor', '<div id="passions-editor"></div>');
    previewElem = angular.element('<div cdl-preview>HELLO</div>')
    $compile(previewElem)(previewScope);
    editorElem = angular.element('<div cdl-passions-editor></div>')
    $compile(editorElem)(editorScope);
    editorScope.$digest();
  }));

  it('cdl-preview works', inject(function($compile, EditorsFactory){
    expect(EditorsFactory.preview.html()).toEqual('HELLO');
  }));

  it('cdl-editor works', inject(function(){
    expect(factory.editor.getValue()).toEqual(factory.preview.html());
  }));

 describe('makeEditable()', function() {
   var updateEditorSpy;

   beforeEach(function() {
     updateEditorSpy = spyOn(factory, "updateEditor");
     factory.makeEditable(factory, element);
   });

   describe('directives', function() {
     it('sets the preview attribute on the factory object', function() {
       expect(factory.preview).toEqual(element);
     });

     it("should update the contents of the editor", function() {
       expect(updateEditorSpy).toHaveBeenCalled();
     });
   });
 });

 describe("setEditor()", function() {
   var aceSpy, updateEditorSpy;

   beforeEach(function() {
     aceSpy = spyOn(ace, "edit").and.callThrough();
     updateEditorSpy = spyOn(factory, "updateEditor");
     factory.setEditor(editorScope, editorElem);
   });

   it("should set the editor attribute on the factory object", function() {
     expect(factory.editor).toBeDefined();
   });

   it("should call ace.edit with the #passions-editor element", function() {
     expect(aceSpy).toHaveBeenCalledWith(editorElem.children()[0]);
   });

   it("should register factory.updatePreview to the on change event", function() {
     var onEventSpy = spyOn(factory.editor.getSession(), "on");
     factory.initializeEditor();
     expect(onEventSpy).toHaveBeenCalledWith("change", factory.updatePreview);
   });

   it("should update the contents of the editor", function() {
     expect(updateEditorSpy).toHaveBeenCalled();
   });
 });

 describe("updatePreview()", function() {
   describe("without a preview", function() {
     beforeEach(function() {
       factory.preview = null;
       factory.setEditor({}, editorElem);
     });

     it("should not throw an exception", function() {
       expect(factory.updatePreview).not.toThrow();
     });
   });

   describe("without an editor", function() {
     beforeEach(function() {
       factory.makeEditable({}, element);
       factory.editor = null;
     });

     it("should not throw an exception", function() {
       expect(factory.updatePreview).not.toThrow();
     });
   });

   describe("with a preview and editor defined", function() {
     beforeEach(function() {
       factory.setEditor({}, editorElem);
       factory.makeEditable({}, previewElem);
       previewElem.html("");
       factory.updatePreview();
     });

     it("should update the contents of the preview", function() {
       expect(factory.preview.html()).toEqual(factory.editor.getValue());
     });
   });
 });

 describe("updateEditor()", function() {
   describe("without a preview", function() {
     beforeEach(function() {
       factory.preview = null;
       factory.setEditor({}, editorElem);
     });

     it("should not throw an exception", function() {
       expect(factory.updateEditor).not.toThrow();
     });
   });

   describe("without an editor", function() {
     beforeEach(function() {
       factory.makeEditable({}, element);
       factory.editor = null;
     });

     it("should not throw an exception", function() {
       expect(factory.updateEditor).not.toThrow();
     });
   });

   describe("with a preview and editor defined", function() {
     beforeEach(function() {
       factory.setEditor({}, editorElem);
       factory.makeEditable({}, previewElem);
       previewElem.html("hello there");
       factory.updateEditor();
     });

     it("should update the contents of the editor", function() {
       expect(factory.editor.getValue()).toEqual("hello there");
     });
   });
 });
});
