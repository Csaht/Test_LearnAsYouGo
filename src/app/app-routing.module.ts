import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorddetailComponent } from './worddetail/worddetail.component';
import { WordlistComponent } from './wordlist/wordlist.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'country-list',
    pathMatch: 'full',
  },
  { path: 'country-list', component:WordlistComponent},
  { path: 'country-details', component: WorddetailComponent},
 
 
  
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
