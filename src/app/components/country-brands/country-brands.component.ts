import {Component, OnInit, ViewChild} from '@angular/core';
import {Ramen} from '../ramen/Ramen';
import {RamenService} from '../ramen.service';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-country-brands',
  templateUrl: './country-brands.component.html',
  styleUrls: ['./country-brands.component.scss']
})
export class CountryBrandsComponent implements OnInit {

  ramen: Ramen[];
  searchText;
  constructor(private ramenService: RamenService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.ramen = this.ramenService.getData();
  }
}
