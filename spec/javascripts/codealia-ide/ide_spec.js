describe("Codealia's awesome in-browser IDE", function() {
  beforeEach(function() {
    loadFixtures('ide_fixture.html');
    this.ide = new Codealia.IDE({
      editor: 'editor',
      output: 'code-output'
    });

    this.editor = $('#editor');
    this.output = $('#code-output');
  });

  it('should be able to print text using a log function', function() {
    this.ide.log('Hello World!');

    expect(this.output).toContainText('Hello World!');
  });

  it('should be able to evaluate a simple piece of code', function() {
    this.ide.evaluate('var i = 0; log(i + 100);');

    expect(this.output).toContainText('100');
  });
});