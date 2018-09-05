class SongsController < ApplicationController
    def index
        if (params[:album_id])
            @songs = Album.find(params[:album_id]).songs
        else
            @songs = Song.all
        end
        render json: { songs: @songs }
    end

    def show
        render json: { song: Song.find(params[:id]) }
    end

    skip_before_action :verify_authenticity_token

    def create
        @song = Album.find(params[:album_id]).songs.create(songs_params)
        render json: { song: @song }
    end
    
    def update
        @song = Song.find(params[:id])
        render json: { song: @song.update(songs_params) }
    end

    def destroy
        @song = Song.find(params[:id])
        @song.destroy
        render json: { message: "Song destroyed" }
    end
    private
    def songs_params
        params
        .require(:data)
        .require(:attributes)
        .permit(
            :song_name
        )

    end

end
