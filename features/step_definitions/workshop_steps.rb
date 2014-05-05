Then(/^I (should be|am) on Workshop ([^"]*)'s "([^"]*)" page$/) do |option, workshop_id, part_id|
  path = "/learning/workshop-#{workshop_id}/#{part_id}"

  case option
  when 'am'
    visit path
  when 'should be'
    expect(current_path).to eq path
  else
    pending
  end
end
