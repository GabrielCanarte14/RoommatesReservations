class Api::UsersController < ApplicationController
  def index
    users = User.all()
    render json:users, status: 200
  end
  
  def new
    user = User.new 
  end

  def create 
    user = User.new(user_params)
    if user.save
      render json.room, status: 200
    else 
      render json:{ error: "creating error..."}
    end 
  end

def show
  user = User.find(params[:username])
  if user
    render json:user, status: 200
  else
    render json: { error: "User not found!"}
  end
end

def new
  user = User.new
end

def destroy
  user = User.find(params[:username])
  if user
    user.destroy
    render json: "User deleted successfully"
  end
end

#def by_city
# city = params[:city]
# users = User.where(city: @city)
# if users
#   render json:users, status: 200
# else
#   render json: { "Not existing users on this city" }
#  end
#end


private

  def user_params
    params.require(:user).permit(:username, :password, :name, :email, :age, :city)
  end
end
