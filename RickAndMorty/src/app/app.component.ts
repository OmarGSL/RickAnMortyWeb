import { Component } from '@angular/core';
import { RickmortyapiService } from './service/rickmortyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickAndMorty';

  characters: any[] = [];

  constructor(private data: RickmortyapiService){}

  ngOnInit(): void{
    this.getCharacters()
  }

  images = [
    'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    'https://via.placeholder.com/400x300/222222/FFFFFF?text=Foto+2',
    'https://via.placeholder.com/400x300/333333/FFFFFF?text=Foto+3',
  ];
  index = 0;

  nextImage() {
    if (this.index < this.images.length - 1) {
      this.index++;
    } else {
      this.index = 0; // Reinicia el carrusel al final
    }
  }

  prevImage() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.images.length - 1; // Va al final si está en el inicio
    }
  }

  getCharacters(){
    this.data.getCharacters().subscribe((data) =>{
      this.characters = data;
      console.log(data);
    })
  }

}
