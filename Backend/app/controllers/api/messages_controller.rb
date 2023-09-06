class Api::MessagesController < ApplicationController
  def index
    messages = Message.all()
    render json:messages, status: 200
  end

  def new
    message = Message.new
  end

  def create 
    message = Message.new(
      to_user: message_params[:to_user],
      content: message_params[:content],
      from_user: message_params[:from_user]
    )
    if message.save
      render json.message, status: 200
    else 
      render json:{ error: "creating error..."}
    end 
  end

  def show
    message = Message.find(params[:id])
    if message
      render json:message, status: 200
    else
      render json: { error: "message not found!"}
    end 
  end

  def messages_except_owner
    owner_to_exclude = params[:from_user]
  
    @messages = Message.where.not(from_user: owner_to_exclude)
  
    render json: @messages
  end
  
  def messages_byowner
    ownerid = params[:from_user]
  
    @messages = Message.where(from_user: ownerid)
  
    render json: @messages
  end


  def new
    message = Message.new
  end

  def destroy
    message = Message.find(params[:id])
    if message
      message.destroy
      render json: "Article deleted successfully"
    end
  end

  private

  def message_params
    params.require(:message).permit(:to_user, :content, :from_user)
  end

  
end
