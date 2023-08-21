class UsersController < ApplicationController
    def new
        @user = User.new 
    end
    def create
        @user = User.new(user_params)
        if @user.save
          redirect_to users_path(@user), notice: 'User was successfully created.'
        else
          render :new
        end
    end

    def index
        @users = User.all
    end

    def by_city
      @city = params[:city]
      @users = User.where(city: @city)
    end


    private

    def user_params
      params.require(:user).permit(:username, :name, :email, :age, :city)
    end


end
