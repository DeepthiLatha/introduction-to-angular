import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
    
    playlists: string[] = [];

    addSong: string[] = [];

  
    newPlaylistName: string = ''; 

    constructor(private router: Router) { }

    ngOnInit(): void {
    }
    addSongs(playlistName: string): void {
    console.log(playlistName);

        this.router.navigate(['/home']);

    }
    createPlaylist(): void {
        if (this.newPlaylistName.trim() !== '') {
            this.playlists.push(`${this.newPlaylistName.trim()}`);
            this.playlists.push("+ Add Songs")
            this.newPlaylistName = ''; 
        }
    }
}
