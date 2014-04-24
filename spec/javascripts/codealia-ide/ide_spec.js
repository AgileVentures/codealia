describe("Codealia's awesome in-browser IDE", function() {
  var scope, rootScope, controller;

  beforeEach(module('CodealiaIDE'));
  beforeEach(inject(function($controller) {
    rootScope = {};
    scope = {};
    controller = $controller('LessonsController', { $rootScope: rootScope, $scope: scope });
  }));

  it('should have the editor initially undefined', function() {
    expect(scope.editor).not.toBeDefined();
  });

  it('should have the preview initially undefined', function() {
    expect(scope.preview).not.toBeDefined();
  });

  it('should default mode to "HTML"', function() {
    expect(rootScope.mode).toEqual('HTML');
  });

  it('should default lessonId to "1"', function() {
    expect(rootScope.lessonId).toEqual('1');
  });

  describe('editor', function() {
    var genPreviewSpy;

    beforeEach(function() {
      setFixtures(sandbox({ id: 'editor' }));
      appendSetFixtures('<iframe id="page-preview" src="data:text/html;charset=utf-8,<html><head></head><body></body></html>"></iframe>');
      genPreviewSpy = spyOn(scope, 'generatePreview').and.callThrough();
      scope.init();
    });

    it('should define a new editor', function() {
      expect(scope.editor).toBeDefined();
    });

    it('should define a new preview', function() {
      expect(scope.preview).toBeDefined();
    });

    describe('generatePreview', function() {
      it('should trigger on editor session change event', function() {
        scope.editor.getSession().setValue('a');
        expect(genPreviewSpy).toHaveBeenCalled();
      });
    });

    describe('HTML mode', function() {
      it('should replace the preview contents with the editor contents', function() {
        var sampleHtml = '<div>This is a div</div>';
        var body = scope.preview.contents().find('body');
        scope.editor.getSession().setValue(sampleHtml);
        expect(body.html()).toEqual(sampleHtml);
      });
    });
  });
});
