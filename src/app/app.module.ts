import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
//import {MatFormFieldControl, MatInputModule} from '@angular/material;
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { PropertiesComponent } from './properties/properties.component';
import { AllpropertiesComponent } from './allproperties/allproperties.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { FiltersComponent } from './filters/filters.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FeatureslistComponent } from './features/featureslist/featureslist.component';
import {HttpClientModule} from '@angular/common/http';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    PropertiesComponent,
    AllpropertiesComponent,
    FiltersComponent,
    FeatureslistComponent,
    AddpropertyComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule ,
    MatToolbarModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
