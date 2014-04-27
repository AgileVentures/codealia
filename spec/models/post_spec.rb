require 'spec_helper'

describe Post do
  describe 'validations' do
    subject(:post) { Post.new }
    before { post.valid? }

    [:title, :author, :content].each do |attribute|
      it "should validate presence of #{attribute}" do
        expect(post).to have_at_least(1).error_on(attribute)
        expect(post.errors.messages[attribute]).to include I18n.t(
          'activerecord.errors.messages.blank', attribute: attribute.capitalize)
      end
    end
  end
end
