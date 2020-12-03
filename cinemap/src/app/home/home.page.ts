import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas = []; /* [
    {
      titulo: "Matrix",
      anno: 1999,
      director: "Hermanas Washosky",
      imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/matrix-poster-1551456391.jpg"

    },
    {
      titulo: "1917",
      anno: 2020,
      director: "Sam Mendes",
      imagen: "https://images-na.ssl-images-amazon.com/images/I/61Zf5g-xUxL._AC_SL1039_.jpg"
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    this.peliculasService.getPeliculas();
  }
}
