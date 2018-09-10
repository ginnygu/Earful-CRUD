class AlbumsController < ApplicationController
    def index
        if (params[:artist_id])
            @albums = Artist.find(params[:artist_id]).albums
        else
            @albums = Album.all
        end 
        render json: { albums: @albums }, include: :songs
    end

    def show
        render json: { album: Album.find(params[:id]) }, include: :songs
    end

    def create 
        @album = Album.create(albums_params)
        render json: { album: @album }
    end

    def update
        @album = Album.find(params[:id])
        render json: { album: @album.update(albums_params) }
    end

    def destroy
        @album = Album.find(params[:id])
        @album.destroy
        render json: { message: "Album destroyed" }
    end

    private
    def albums_params
        params
        .permit(
           :album_name, 
           :artist_id
        )
    end

end
