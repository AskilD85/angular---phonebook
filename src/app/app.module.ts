import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
 
import { HttpClientModule }   from '@angular/common/http';
import { SearchPipe } from './search.pipe';
//import { BrowserAnimaionsModule } from '@angular/platform-browser/animations';


 
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
    declarations: [ AppComponent,SearchPipe],
    bootstrap:    [ AppComponent ],
    
})
export class AppModule { }


