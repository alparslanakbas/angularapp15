import { AdminLayoutComponent } from './admin-pages/admin-layout/admin-layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminAnasayfaComponent } from './admin-pages/Anasayfa/Anasayfa.component';
import { ÜyeListesiComponent } from './admin-pages/ÜyeListesi/ÜyeListesi.component';
import { AnasayfaComponent } from './user-pages/Anasayfa/Anasayfa.component';
import { HakkımızdaComponent } from './user-pages/Hakkımızda/Hakkımızda.component';
import { ÜrünlerComponent } from './user-pages/Ürünler/Ürünler.component';
import { İletişimComponent } from './user-pages/İletişim/İletişim.component';
import { UserLayoutComponent } from './user-pages/user-layout/user-layout.component';


const routes: Routes = [
  //User
 {path:'',component:UserLayoutComponent,
 children:[
  {path:'',component:AnasayfaComponent},
  {path:"Ürünler",component:ÜrünlerComponent},
  {path:"Hakkımızda",component:HakkımızdaComponent},
  {path:"İletişim",component:İletişimComponent}
 ]},


//Admin
{path:"Admin",component:AdminLayoutComponent,
children:[
  {path:'',component:AdminAnasayfaComponent},
  {path:"Üyeler",component:ÜyeListesiComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
