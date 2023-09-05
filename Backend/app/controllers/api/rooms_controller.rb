class Api::RoomsController < ApplicationController
  def index
    rooms = Room.all()
    render json:rooms, status: 200
  end

  def new
    room = Room.new
  end

  def create 
    room = Room.new(
      owner: room_params[:owner],
      address: room_params[:address],
      title: room_params[:title],
      roomsAvailable: room_params[:roomsAvailable],
      price: room_params[:price],
      city: room_params[:city]
    )
    if room.save
      render json.room, status: 200
    else 
      render json:{ error: "creating error..."}
    end 
  end

  def show
    room = Room.find(params[:id])
    if room
      render json:room, status: 200
    else
      render json: { error: "Room not found!"}
    end 
  end

  def update
    room = Room.find(params[:id])
    if room
      room.update(owner: room_params[:owner],
        address: room_params[:address],
        title: room_params[:title],
        roomsAvailable: room_params[:roomsAvailable],
        price: room_params[:price],
        city: room_params[:city]
      )
      render json: room
    else 
      render json:{ error: "Room not found"}
    end
  end 

  def new
    room = Room.new
  end

  def destroy
    room = Room.find(params[:id])
    if room
      room.destroy
      render json: "Article deleted successfully"
    end
  end

  private
  def room_params
    params.require(:room).permit(:owner, :address, :title, :roomsAvailable, :price, :city)
  end
end
