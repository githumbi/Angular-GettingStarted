import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  starWidth: number;
  rating = 4;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
}
