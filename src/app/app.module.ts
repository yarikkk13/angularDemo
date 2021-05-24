import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./components/app/app.component";
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FullPostComponent} from './components/full-post/full-post.component';

const routes: Routes = [
  {path: 'posts', component: PostComponent},
  {path: 'posts/:id', component: FullPostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
