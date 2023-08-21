class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to sent_messages_path(from_user: @message.from_user), notice: "Mensaje enviado exitosamente."
    else
      render :new
    end
  end

  def index
    @messages = Message.all
  end

  def sent
    @sent_messages = Message.where(from_user: params[:from_user])
  end

  def received
    @received_messages = Message.where(to_user: params[:to_user])
  end

  private

  def message_params
    params.require(:message).permit(:to_user, :content, :from_user)
  end

  
end
