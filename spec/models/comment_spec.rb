require 'spec_helper'

#RSpec Unit test on Post Comment model


describe Comment do
  describe 'validation' do
    subject(:comment) { Comment.new }
    before { comment.valid? }


    [:post, :name, :body].each do |attribute|
      it "should validate presence of #{attribute}" do
        expect(comment).to have_at_least(1).error_on(attribute)
        expect(comment.errors.messages[attribute]).to include I18n.t(
          'activerecord.errors.messages.blank', attribute: attribute.capitalize)
      end
    end

  end
end
