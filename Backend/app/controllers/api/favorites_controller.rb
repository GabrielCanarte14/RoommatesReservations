class Api::FavoritesController < ApplicationController
  def index
    favorites = Favorite.all()
    render json:favorites, status: 200
  end

  def new
    favorite = Favorite.new
  end

  def create 
    favorite = Favorite.new(
      owner: favorite_params[:owner],
      address:favorite_params[:address],
      title: favorite_params[:title],
      roomsAvailable: favorite_params[:roomsAvailable],
      price: favorite_params[:price],
      city: favorite_params[:city],
      interested: favorite_params[:interested]
    )
    if favorite.save
      render json.favorite, status: 200
    else 
      render json:{ error: "creating error..."}
    end 
  end

  def show
    favorite = Favorite.find(params[:id])
    if favorite
      render json:favorite, status: 200
    else
      render json: { error: "Room not found!"}
    end 
  end

  def favorites_except_owner
    owner_to_exclude = params[:owner]
  
    @favorites = Favorite.where.not(owner: owner_to_exclude)
  
    render json: @favorites
  end
  
  def favorites_byowner
    ownerid = params[:owner]
  
    @favorites = Favorite.where(owner: ownerid)
  
    render json: @favorites
  end
  
  def new
    favorite = Favorite.new
  end

  def destroy
    favorite = Favorite.find(params[:id])
    if favorite
      favorite.destroy
      render json: "Article deleted successfully"
    end
  end

  private
  def favorite_params
    params.require(:favorite).permit(:owner, :address, :title, :roomsAvailable, :price, :city, :interested)
  end
end
