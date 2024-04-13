// song-data.service.ts
import { Injectable } from '@angular/core';
import { Songs } from 'src/app/add/models/song';

@Injectable({
  providedIn: 'root'
})
export class SongDataService {
  selectedSongs: Songs[] = [];

  addSongs(songs: Songs[]): void {
    this.selectedSongs = songs;
  }
}
