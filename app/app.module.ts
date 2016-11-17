// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

// Services
import { HeroService } from './hero.service';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent],
  bootstrap: [AppComponent],
  providers: [HeroService],

})
export class AppModule { }
