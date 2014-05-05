json.array!(@posts) do |post|
  json.extract! post, :id, :title, :author, :created_at, :content
  json.url post_url(post, format: :json)
end
