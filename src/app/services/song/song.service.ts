import { Injectable } from '@angular/core';
import { Songs } from 'src/app/add/models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService { 

  constructor() { }

  getAll():Songs[]{
    return [
      {
        name:'Who says',
        singer:'Selena Gomez',
        musicDirector:'Chris Applebaum',
        releaseDate: '2011',
        album:'When the Sun Goes Down',
        imageUrl:'/assets/img-1.jpg'
      },
      {
        name:'Senorita',
        singer:'Camila Cabello and Shawn Mendes',
        musicDirector:'Andrew Watt',
        releaseDate:'2018', 
        album:'Shawn Mendes',
        imageUrl:'/assets/img-2.jpg'
      },
      {
        name:'She Dont Know',
        singer:'Millind Gaba',
        musicDirector:'',
        releaseDate: '2019',
        album:'Blessed' ,
        imageUrl:'/assets/img-3.jpg'
      },
      {
        name:'Im In Love With The Shape Of You',
        singer:'DJ Tempa',
        musicDirector:'DJ Tempa',
        releaseDate:'2017',
        album:'Divide',
        imageUrl:'/assets/img-4.jpg'
      },
      {
        name:'On My Way',
        singer:'Khasa Aala Chahar',
        musicDirector:' Ghanu',
        releaseDate:'20',
        album:'On My Way',
        imageUrl:'/assets/img-5.jpg'
      },
      {
        name:'',
        singer:'',
        musicDirector:'',
        releaseDate:'',
        album:'',
        imageUrl:'/assets/img-6.jpg'
      },
      {
        name:'',
        singer:'',
        musicDirector:'',
        releaseDate:'',
        album:'',
        imageUrl:'/assets/img-7.jpg'
      },
      {
        name:'',
        singer:'',
        musicDirector:'',
        releaseDate:'', 
        album:'',
        imageUrl:'/assets/img-8.jpg'
      }
    ];
    
  }

   
}
