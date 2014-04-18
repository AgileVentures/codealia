require 'spec_helper'



#RSpec Unit test on Post model

        describe Post do
          describe 'validations' do
                subject(:post) {Post.new}
                before { post.valid? }


            [:title, :author, :content].each do |attribute|
              it "should validate presence of #{attribute}" do
              expect(post).to have_at_least(1).error_on(attribute)
              expect(post.errors.messages[attribute]).to include "can't be blank"
              end
            end
          end
        end