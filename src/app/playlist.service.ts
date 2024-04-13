// playlist.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() { }

  createPlaylist(playlistName: string): void {
    let playlistsString = localStorage.getItem('playlists');
    let playlists = playlistsString ? JSON.parse(playlistsString) : [];
    playlists.push({ name: playlistName, songs: [] });
    localStorage.setItem('playlists', JSON.stringify(playlists));
    // Create a folder for the playlist
    localStorage.setItem(playlistName, JSON.stringify({}));
  }

  getPlaylists(): any[] {
    let playlistsString = localStorage.getItem('playlists');
    return playlistsString ? JSON.parse(playlistsString) : [];
  }

  getPlaylist(playlistName: string): any {
    let playlistString = localStorage.getItem(playlistName);
    return playlistString ? JSON.parse(playlistString) : {};
  }

  addSongToPlaylist(playlistName: string, song: any): void {
    let playlist = this.getPlaylist(playlistName);
    playlist.songs.push(song);
    localStorage.setItem(playlistName, JSON.stringify(playlist));
  }
}
