class RoomPostsController < ApplicationController
  def new
      @room_post = RoomPost.new
    end
  
    def create
      @room_post = RoomPost.new(room_post_params)
      if @room_post.save
        redirect_to room_posts_path, notice: "Room post was successfully created."
      else
        render :new
      end
    end

    def index
      @room_posts = RoomPost.all
    end

    def view
      @room_post = RoomPost.find(params[:id])
    end

    def destroy
      @room_post = RoomPost.find(params[:id])
      @room_post.destroy
      redirect_to room_posts_path
    end

    def edit
      @room_post = RoomPost.find(params[:id])
    end

    def update
      @room_post = RoomPost.find(params[:id])
      if @room_post.update(room_post_params)
        redirect_to room_posts_path, notice: "Room post was successfully updated."
      else
        render :edit
      end
    end      

    private
  
    def room_post_params
      params.require(:room_post).permit(:owner, :address, :description)
    end
end
