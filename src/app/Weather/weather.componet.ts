import {
    Component, OnInit,
    Input
  } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { WeatherDataService } from '../weather.service';
  
  @Component({
    selector: 'weather-search',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
  })
  
  export class WeatherComponent {
       private weatherDataService: WeatherDataService;
      formCountrySearch = new FormGroup({
          searchCountry: new FormControl('',
              Validators.compose([Validators.required]))
      });
      
      formCitySearch = new FormGroup({
          searchCity: new FormControl('',
              Validators.compose([Validators.required]))
      });
      
      cityList:[];
      
      onCountrySearchSubmit(event) {
      if (this.formCountrySearch.valid) {
        let formValues = this.formCountrySearch.getRawValue();
        let country = formValues['searchCountry'];
        
        //Call service
        this.weatherDataService.getcity(country)
          .map(this.populateCity);
        //   .catch((error) => {
        //       return Observable.of(ReviewDrawdownActions.getNewDrawdownWIMIdError());
        //   });
      }
      event.preventDefault();
    }
    
    private populateCity(res: Response) {
        let body = res.json();
       this.cityList[] = body
    }

    onCitySelectChange (event) {
      if(this.formCitySearch.valid) {
          let formValues = this.formCitySearch.getRawValue();
          let city = formValues['searchCity'];
          
      }
    }
      
  }