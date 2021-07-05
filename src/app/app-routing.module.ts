import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpropertiesComponent } from './allproperties/allproperties.component';
import { FiltersComponent } from './filters/filters.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';

const routes: Routes = [
  {
    component: AllpropertiesComponent, 
  path:"allproperties"
},
{
  component: FiltersComponent, 
path:"filters"
},
{
  component: AddpropertyComponent, 
path:"addproperties"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
