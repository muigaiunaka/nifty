import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OnboardPage } from '../pages/onboard/onboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OnboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OnboardPage
  ],
  providers: []
})
export class AppModule {}
