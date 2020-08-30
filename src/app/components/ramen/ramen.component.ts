import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {RamenService} from '../ramen.service';
import {Ramen} from './Ramen';
import {Router} from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatGridList} from '@angular/material/grid-list';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-ramen',
  templateUrl: './ramen.component.html',
  styleUrls: ['./ramen.component.scss']
})
export class RamenComponent implements OnInit {

  ramen: Ramen[];
  searchText;

  constructor(private ramenService: RamenService, private router: Router, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.ramenService.getRamen()
      .subscribe(returnedData => {
        this.ramen = returnedData.filter((v, i, a) => a.findIndex(t => (t.Country === v.Country)) === i);
      },
        error => alert(error));
  }

  getCountryBrands(Country: string) {
    this.ramenService.getBrandByCountry(Country)
      .subscribe(returnedData => {
        this.ramen = returnedData;
        this.router.navigate(['brands', Country]);
      });
  }


}
