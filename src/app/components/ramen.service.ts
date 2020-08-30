import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Ramen} from './ramen/Ramen';

@Injectable({
  providedIn: 'root'
})
export class RamenService {

  public ramen: Ramen[] = [];
  private base_url = 'http://starlord.hackerearth.com/TopRamen';

  constructor(private http: HttpClient) { }

  getRamen(): any{
    return this.http.get(`${this.base_url}`);
  }

  getBrandByCountry(country: string): any{
      this.ramen = [];
      return this.http.get(`${this.base_url}`)
        .pipe(map(data => {
          for (const d of (data as Array<any>)){
            if (country === d.Country){
              this.ramen.push(d);
            }
          }
        }));
  }

  getData(): any {
    if (this.ramen !== null) {
      return this.ramen
        .sort( (a: any , b: any) =>
          (+a['Top Ten'].substring(a['Top Ten'].indexOf('#') + 1, a.length) -
            +b['Top Ten'].substring(b['Top Ten'].indexOf('#') + 1, b.length)));
    }
  }
}
