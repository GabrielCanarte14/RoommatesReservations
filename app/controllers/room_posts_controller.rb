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

      private
    
      def room_post_params
        params.require(:room_post).permit(:owner, :address, :description)
      end
end
