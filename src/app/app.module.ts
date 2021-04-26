import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './pages/user/user.component';
import { UserGraphComponent } from './components/user-graph/user-graph.component';

import { UserService } from './services/user.service';
import { UserInterceptorService } from './services/user-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    HomeComponent,
    UserListComponent,
    UserDetailComponent,
    UserComponent,
    UserGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
