require 'sinatra'

class AudioSearchApi < Sinatra::Base

  client = Audiosearch::Client.new(
    :id     => 'oauth_id',
    :secret => 'oauth_secret',
    :host   => 'https://www.audiosear.ch/',
    :debug  => false,
  )

  get '/search' do
    search_term = params[:search_term]
    response = client.search(search_term)
    response.results
  end
end