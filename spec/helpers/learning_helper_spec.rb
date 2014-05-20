require 'spec_helper'

describe LearningHelper do
 describe 'LearningHelper#placeholder_img' do
   it 'should return an img tag' do
     expect(placeholder_img(100, 200)).to eq '<img src="http://placekitten.com/g/100/200">'
   end
 end
end