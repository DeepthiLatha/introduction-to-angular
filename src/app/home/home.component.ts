import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song/song.service';
import { Songs } from '../add/models/song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
toggleDetails(_t4: Songs) {
throw new Error('Method not implemented.');
}

  songs:Songs[]= [];


  constructor(private ss:SongService) { }

  ngOnInit(): void {
    this.songs = this.ss.getAll();
  }

}  
