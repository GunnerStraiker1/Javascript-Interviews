import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../../interfaces/Beer';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
})
export class MainPageComponent {
  beers: Beer[] | undefined;
  beersCopy: Beer[] | undefined

  constructor(public http: HttpClient) {
    this.getData();
  }

  async getData() {
    //TODO retrieve Data, data should be retrieved in ASC order by abv property
    // https://api.punkapi.com/v2/beers
  }

  filter(e: any) {
    const search: string = e.target.value;
    console.log({ search });
    // ToDo the filter
  }
}
