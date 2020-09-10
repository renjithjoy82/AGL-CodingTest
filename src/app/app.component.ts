import { Component, OnInit } from '@angular/core';
import { PetsService } from './services/pets.service';


@Component({
  selector: 'app-root',
  providers: [PetsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Json Data Fetch';
  pets: any[];

  constructor(public petsService: PetsService) { 
    
  }

  ngOnInit(){
    this.getPetsData();
  }

  public getPetsData(){
    this.petsService
    .getCatsInfo().then((res) => this.pets = res);
  }
}
