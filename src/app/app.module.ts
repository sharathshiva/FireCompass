import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RamenComponent } from './components/ramen/ramen.component';
import {HttpClientModule} from '@angular/common/http';
import {RamenService} from './components/ramen.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { CountryBrandsComponent } from './components/country-brands/country-brands.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatSortModule} from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    RamenComponent,
    CountryBrandsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatSortModule,
    NgbModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
  providers: [RamenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
