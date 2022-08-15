import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule, 
  MatButtonModule,
  MatButtonToggleModule} from '@angular/material';

import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

import { HttpService } from './services';

import { NgInitDirective } from './directives/ng-init.directive';

import { LeftNavComponent } from './components/shared/leftnav/leftnav.component';
import { TopNavComponent } from './components/shared/topnav/topnav.component';
import { AppComponent } from './components/app/app.component';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const appRoutes: Routes = [
  {
      path: '',
      component: MainLayoutComponent,
      // canActivate: [AuthGuard],
      children: [
          { path: '', pathMatch: 'full', redirectTo: '/home' },
          { path: 'home', component: HomeComponent, data: {title: 'Pulumi Café'} },
          { path: 'menu', component: MenuComponent, data: {title: 'Menu'} },
      ]
  },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MainLayoutComponent,
    LeftNavComponent,
    TopNavComponent,
    NgInitDirective,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    NgProgressModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [
    HttpService,
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgProgressInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
