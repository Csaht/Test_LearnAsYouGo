import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {
  countryList:any = []
  countryDetails:any
  countryRegion:any
  constructor(private dataService:DataService,
    private  router:Router,
    private cdr: ChangeDetectorRef
  ){}
  
  ngOnInit(){
    this.countryList = this.dataService.jsonnData
    this.countryDetails = this.countryList
    this.countryRegion=this.countryList.map((value:any) => value?.region)
     
     }

     goToDetails(item:any){
      this.router.navigate(['country-details',item]);
     }
     handelOnSelect(searchVal:any){
      console.log("searchVal--->",searchVal)
      let filterdArray = this.countryList.filter((entry:any) => entry.region === searchVal);
      this.countryDetails= filterdArray
      return filterdArray
      
     }

}
