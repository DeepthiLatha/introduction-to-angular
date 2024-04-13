
import { Component } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  playlists: any[] = [];
  newPlaylistName: string = '';

  constructor(private playlistService: PlaylistService) {
    this.playlists = this.playlistService.getPlaylists();
  }

  createPlaylist(): void {
    if (this.newPlaylistName.trim() !== '') {
      this.playlistService.createPlaylist(this.newPlaylistName);
      this.newPlaylistName = '';
      this.playlists = this.playlistService.getPlaylists();
    }
  }

  viewPlaylist(playlist: any): void {
    console.log('Viewing playlist:', playlist);
  }
}







// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Songs } from '../add/models/song';// Import Song model

// @Component({
//   selector: 'app-playlist',
//   templateUrl: './playlist.component.html',
//   styleUrls: ['./playlist.component.css']
// })
// export class PlaylistComponent implements OnInit {
//   playlists: any[] = []; // Initialize playlists array

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       const selectedSong = JSON.parse(params['selectedSong']); // Get selected song from query params
//       this.addSongToPlaylist(selectedSong);
//     });
//   }

//   addSongToPlaylist(song: Songs): void {
//     // Logic to add the selected song to one or more playlist folders
//     // You can implement this logic based on user interaction or predefined rules
//     // For example, you can have a button to add the song to a specific playlist folder
//   }
// }


