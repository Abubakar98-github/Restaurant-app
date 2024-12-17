import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {

  alert : boolean = false

  constructor(private resto : RestoService){}

  addRestaurant = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')
  })

  collectRestaurant(){
    this.resto.saveResto(this.addRestaurant.value)
    this.alert = true;
    this.addRestaurant.reset({})
  }
  close(){
    this.alert = false
  }

}
