require 'spec_helper'

describe LearningHelper do
 describe 'LearningHelper#placeholder_img' do
   it 'should return an img tag with a src of the specified width' do
     expect(placeholder_img(100)).to eq '<img src="http://placekitten.com/g/100/100">'
   end

   it 'should return an img tag with a src of the specified width and height' do
     expect(placeholder_img(100, 150)).to eq '<img src="http://placekitten.com/g/100/150">'
   end
 end
end