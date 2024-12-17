import { Component } from '@angular/core';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css'],
})
export class ListRestaurantComponent {
  constructor(private resto: RestoService) {}

  collection: any = [];

  ngOnInit(): void {
    this.resto.getList().subscribe((result: any) => {
      console.log(result);
      this.collection = result;
    });
  }
  deleteResto(item: any) {
    const newArray = this.collection.filter((e: any) => e.id !== item);
    this.collection = newArray;
    this.resto.deleteResto(item).subscribe((result) => {
      console.log(result);
    });
  }
}
