import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worddetail',
  templateUrl: './worddetail.component.html',
  styleUrls: ['./worddetail.component.css']
})
export class WorddetailComponent {

  
  countryDetails:any
  borders:any=[]
  constructor(
    private activatedRoute:ActivatedRoute
  ){}
  
  ngOnInit(){
   
    this.countryDetails=this.activatedRoute.snapshot.params
    this.borders=this.countryDetails?.borders.split(" ")
    // console.log("this.userData---->", this.countryDetails)
    // console.log("Borders------>", this.countryDetails?.borders.split(" "))
    // console.log("Borders------>",this.borders?.length)
   }

}
