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
  currentIndex: number = 2;

  constructor(private data: RickmortyapiService) { }

  ngOnInit(): void {
    this.data.getCharacters().subscribe((data) => {
      this.characters = data.results
    })

  }
  prev(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.characters.length - 1;
  }

  next(): void {
    this.currentIndex = (this.currentIndex < this.characters.length - 1) ? this.currentIndex + 1 : 0;
  }
}
