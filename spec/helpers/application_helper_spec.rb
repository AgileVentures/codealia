require 'spec_helper'

describe ApplicationHelper do
  describe 'ApplicationHelper#workshop_path' do
    it 'should return the correctly assembled path for numeric input' do
      expect(workshop_path(3, '2')).to eq '/learning/workshop-3/part-2'
    end

    it 'should return the correctly assembed path when the part is a string' do
      expect(workshop_path(5, 'hello')).to eq '/learning/workshop-5/hello'
    end
  end
end
