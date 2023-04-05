import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './user-pages/user.module';
import { AdminModule } from './admin-pages/admin.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule,
    UserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
