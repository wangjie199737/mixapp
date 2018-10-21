import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

import {RouterModule,Router} from '@angular/router';
import { LessonComponent } from './components/lesson/lesson.component'
import { HttpClient } from "selenium-webdriver/http";
import { HttpClientModule } from "@angular/common/http";
import { LessondetailComponent } from './components/lessondetail/lessondetail.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { APipe } from './pipes/a.pipe';
import { ShipinComponent } from './components/shipin/shipin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LessonComponent,
    LessondetailComponent,
    ShequComponent,
    APipe,
    ShipinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'lesson',component:LessonComponent},
      {path:'lesson/:lessonId',component:LessondetailComponent},  
      {path:'shequ',component:ShequComponent },
      {path:'shipin',component:ShipinComponent},
      {path: "", redirectTo: "home", pathMatch: "full" },
      {path: "**", component: HomeComponent }//默认的必须加在最后！！
      
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
