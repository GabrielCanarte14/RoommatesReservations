class FavoritesController < ApplicationController
  def new
    @room_id = params[:room_id]
    @favorite = Favorite.new  # Agrega esta línea para inicializar @favorite
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.username = params[:favorite][:username]  # Ajusta esta línea
    if @favorite.save
      redirect_to favorites_path, notice: "Agregado a Favoritos."
    else
      render :new
    end
  end

  def index
    @favorites = Favorite.all
  end

  private

  def favorite_params
    params.require(:favorite).permit(:username, :room_id)
  end
end
