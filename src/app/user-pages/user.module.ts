import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaComponent } from './Anasayfa/Anasayfa.component';
import { HakkımızdaComponent } from './Hakkımızda/Hakkımızda.component';
import { İletişimComponent } from './İletişim/İletişim.component';
import { ÜrünlerComponent } from './Ürünler/Ürünler.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './user-layout/header/header.component';
import { TabMenuComponent } from './user-layout/tab-menu/tab-menu.component';
import { FooterComponent } from './user-layout/footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AnasayfaComponent,HakkımızdaComponent,İletişimComponent,ÜrünlerComponent,UserLayoutComponent, UserLayoutComponent, HeaderComponent, TabMenuComponent, FooterComponent],
  exports:[AnasayfaComponent,HakkımızdaComponent,İletişimComponent,ÜrünlerComponent,UserLayoutComponent],
})
export class UserModule { }
