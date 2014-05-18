CodealiaApp.factory("EditorsFactory", function() {
  var self = this;
  self.editors = [];

  self.updatePreview = function() {
    if (self.preview && self.editor) {
      self.preview.html(self.editor.getValue());
    }
  }

  self.updateEditor = function() {
    if (self.preview && self.editor) {
      self.editor.setValue(self.preview.html());
    }
  }

  self.initializeEditor = function() {
    var editor = self.editor;

    editor.setTheme("ace/theme/chrome");
    editor.setFontSize(14);
    editor.getSession().setMode("ace/mode/html");
    editor.setHighlightActiveLine(false);
    editor.setShowPrintMargin(false);

    editor.getSession().on("change", self.updatePreview);
  }

  self.setEditor = function(scope, element, attrs) {
    self.editor = ace.edit(element.find("#passions-editor")[0]);
    self.initializeEditor();
    self.updateEditor();
  }

  self.makeEditable = function(scope, element, attrs) {
    self.preview = element;
    self.updateEditor();
  }

  return self;
});
