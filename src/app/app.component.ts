import { Component, OnInit } from '@angular/core';
import { DogsService } from './services/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'dogs-info';
  dogInfo: boolean = false;
  selectedValue: string;
  dogsList: string[] = [];

  constructor(private dogsService: DogsService) {
  }

  showDogInfo() {
    this.dogInfo = true;
  }

  ngOnInit(): void {
    this.dogsService.getAll().subscribe((dogs) => {
      this.dogsList = dogs.message;
    })
  }
}
