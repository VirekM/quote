import {NgModule} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    HomeRoutingModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule 
  ],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {
  constructor() {
    console.log(this.constructor.name);
  }
}
