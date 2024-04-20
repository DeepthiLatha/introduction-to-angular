import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song/song.service';
import { Songs } from '../add/models/song';
import { PlaylistService } from '../services/song/playlist.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    songs: Songs[] = [];

    constructor(private ss: SongService, private playlistService: PlaylistService) {}

    ngOnInit(): void {
        this.songs = this.ss.getAll();
    }

    addToPlaylist(song: Songs, playlistName: string): void {
        this.playlistService.addToPlaylist(song, playlistName);
    }
}
