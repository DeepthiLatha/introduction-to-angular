
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Songs } from 'src/app/add/models/song';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private playlistSubject = new BehaviorSubject<Songs[]>([]);
  playlist$ = this.playlistSubject.asObservable();

  constructor() { }

  addToPlaylist(song: Songs, playlistName: string): void {
    const currentPlaylist = this.playlistSubject.getValue();
    const updatedPlaylist = currentPlaylist.concat(song);
    this.playlistSubject.next(updatedPlaylist);
  }
}
