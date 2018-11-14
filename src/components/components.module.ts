import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	// 当需要的时候就引入BrowserModule
	exports: [AComponent]
})
export class ComponentsModule {}
