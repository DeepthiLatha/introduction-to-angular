import { Injectable } from '@angular/core';
import { Songs } from 'src/app/add/models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  searchSongs: any;
  getSongs(Songs: string) {
    throw new Error('Method not implemented.');
  } 

  constructor() { }

  getAll():Songs[]{
    return [
      {
        name:'Who says',
        singer:'Selena Gomez',
        musicDirector:'Chris Applebaum',
        releaseDate: '2011',
        album:'When the Sun Goes Down',
        imageUrl:'/assets/img-1.jpg',
        addSong:'Add to Playlist'
      },
      {
        name:'Senorita',
        singer:'Camila Cabello and Shawn Mendes',
        musicDirector:'Andrew Watt',
        releaseDate:'2018', 
        album:'Shawn Mendes',
        imageUrl:'/assets/img-2.jpg',
        addSong:'Add to Playlist'
      },
      {
        name:'She Dont Know',
        singer:'Millind Gaba',
        musicDirector:'',
        releaseDate: '2019',
        album:'Blessed' ,
        imageUrl:'/assets/img-3.jpg',
        addSong:'Add to Playlist'
      },
      {
        name:'Im In Love With The Shape Of You',
        singer:'DJ Tempa',
        musicDirector:'DJ Tempa',
        releaseDate:'2017',
        album:'Divide',
        imageUrl:'/assets/img-4.jpg',
        addSong:'Add to Playlist'
      },
      {
        name:'On My Way',
        singer:'Khasa Aala Chahar',
        musicDirector:' Ghanu',
        releaseDate:'2021',
        album:'World of Walker',
        imageUrl:'/assets/img-5.jpg',
        addSong:'Add to Playlist'
      },
      {
        name:'Serena-Safari',
        singer:'Serena',
        musicDirector:'Mircea Nistor',
        releaseDate:'2017',
        album:'Safari',
        imageUrl:'/assets/img-6.jpg',
        addSong:'Add to Playlist'
      },
      {
        name:'Cheap Thrills',
        singer:'Sean Paul ',
        musicDirector:'Sia',
        releaseDate:'2017',
        album:'Summer Beats',
        imageUrl:'/assets/img-7.jpg',
        addSong:'Add to Playlist'
      },
      {
        name:'Baby',
        singer:'Justin Bieber',
        musicDirector:'Justin Bieber',
        releaseDate:'2010', 
        album:'Baby',
        imageUrl:'/assets/img-8.jpg',
        addSong:'Add to Playlist'
      }
    ];
    
  }

   
}
