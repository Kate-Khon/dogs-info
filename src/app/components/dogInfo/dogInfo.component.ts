import { Component, Input, OnChanges } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-dogInfo',
  templateUrl: './dogInfo.component.html',
  styleUrls: ['./dogInfo.component.scss'],
})

export class DogInfoComponent implements OnChanges {
  @Input() dogInfo: string;
  imgLink: string;

  constructor(private dogsService: DogsService) {
  }

  ngOnChanges(): void {
    if (this.dogInfo.length) {
      this.dogsService.getPicture(this.dogInfo).subscribe((picData) => {
        console.log(picData.message);
        this.imgLink = picData.message;
      })
    }
  }
}
