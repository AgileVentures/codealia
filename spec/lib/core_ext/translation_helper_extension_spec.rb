require 'spec_helper'

class TranslatorStub
  attr_accessor :should_be_html_safe

  def old_translate(key, options = {})
    text = "<script>alert('Unsafe HTML');</script>"
    (should_be_html_safe ? text.html_safe : text)
  end

  include ActionView::Helpers::TranslationHelper
end

describe 'ActionView::Helpers::TranslationHelper extension' do
  before(:each) do
    @translator = TranslatorStub.new
  end

  let(:translated) { @translator.translate('', {}) }

  it 'should escape translations by default' do
    expect(translated).to_not be_html_safe
  end

  it 'should not escape translations if the translation is HTML safe' do
    @translator.should_be_html_safe = true
    expect(translated).to be_html_safe
  end

  it 'should include an indicator for translated texts' do
    expect(translated).to match /<<.*>>/
  end
end
