require "spec_helper"

describe PostsController do
  describe "routing" do

    it "routes to #index" do
      get("/blog/posts").should route_to("posts#index")
    end

    it "routes to #new" do
      get("/blog/posts/new").should route_to("posts#new")
    end

    it "routes to #show" do
      get("/blog/posts/1").should route_to("posts#show", :id => "1")
    end

    it "routes to #edit" do
      get("/blog/posts/1/edit").should route_to("posts#edit", :id => "1")
    end

    it "routes to #create" do
      post("/blog/posts").should route_to("posts#create")
    end

    it "routes to #update" do
      put("/blog/posts/1").should route_to("posts#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/blog/posts/1").should route_to("posts#destroy", :id => "1")
    end

  end
end
