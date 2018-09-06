class ArtistsController < ApplicationController
    def index
        render json: { artists: Artist.all }, include: :albums
    end

    def show
        render json: { artist: Artist.find(params[:id]) }, include: :albums
    end

    #fixes the error InvalidAuthenticityToken error when POST is used
    skip_before_action :verify_authenticity_token

    def create
        @artist = Artist.create(artists_params)
        render json: { artist: @artist}

    end

    def update
        @artist = Artist.find(params[:id])
        render json: { artist: @artist.update(artists_params) }
    end

    def destroy
        @artist = Artist.find(params[:id])
        @artist.destroy
        render json: { message: "Artist destroyed" }
    end

    private
    def artists_params
        params
        .require(:artist)
        .permit(
            :artist_name
        )
    end
    
end
