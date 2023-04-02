import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnasayfaComponent} from './Anasayfa/Anasayfa.component';
import { ÜyeListesiComponent } from './ÜyeListesi/ÜyeListesi.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [AdminAnasayfaComponent,ÜyeListesiComponent, AdminLayoutComponent],
  exports:[AdminAnasayfaComponent,ÜyeListesiComponent]
})
export class AdminModule { }
