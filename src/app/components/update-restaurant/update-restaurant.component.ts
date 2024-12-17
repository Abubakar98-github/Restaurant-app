import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css'],
})
export class UpdateRestaurantComponent {
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  alert: boolean = false;

  constructor(private router: ActivatedRoute, private resto: RestoService) {}
  ngOnInit(): void {
    this.resto
      .getCurrentResto(this.router.snapshot.params['id'])
      .subscribe((result) => {
        console.log(result);
        this.editRestaurant = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        });
      });
  }
  updateResto() {
    console.log(this.editRestaurant.value);
    this.resto
      .updateResto(this.router.snapshot.params['id'], this.editRestaurant.value)
      .subscribe((result) => {
        console.log(result);
        this.alert = true;
      });
  }
  closeAlert() {
    this.alert = false;
  }
}
