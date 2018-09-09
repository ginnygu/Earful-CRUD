class ArtistsController < ApplicationController
    def index
        render json: { artists: Artist.all }, include: :albums
    end

    def show
        render json: { artist: Artist.find(params[:id]) }, include: :albums
    end

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
        .permit(
            :artist_name
        )
    end
    
end
