import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// import the RouterModule for the SPA page router
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlogComponent } from './components/blog/blog.component';

import {PostsService} from './services/posts.service';

console.log('DB: ', DashboardComponent)
// Set up the application routes
const appRoutes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'dash', component: DashboardComponent }
];

@NgModule({
  // Where components go
  declarations: [
    AppComponent,
    DashboardComponent,
    BlogComponent
  ],
  // Where extra modules go
  imports: [
    BrowserModule,
    HttpModule,
    // Plug in the routes to the app
    RouterModule.forRoot(appRoutes)
  ],
  // Where services go
  // inject our service into the providers array, this is where services go.
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
