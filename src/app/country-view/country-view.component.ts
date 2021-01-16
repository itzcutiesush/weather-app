import { Component, OnInit } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith, catchError } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.scss']
})
export class CountryViewComponent implements OnInit {

  constructor(private appService: AppService) { }

  sortArray: Array<any> = [{key: 1, value:"A-Z"}, {key: 2, value:"Z-A"}];
  selectedSort: Object = this.sortArray[0];
  countryList$: Observable<any>;
  searchTerm = new Subject<string>();
  errorObject : any;

  ngOnInit(): void {
    this.countryList$ = this.searchTerm.pipe(
      debounceTime(300),
      startWith(''),
      distinctUntilChanged(),
      switchMap((term: string) => this.appService.getCountryList(term)),
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  searchCountry(searchString: string){
    this.searchTerm.next(searchString);
  }
}
