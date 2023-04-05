import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddmovieComponent } from './pages/addmovie/addmovie.component';
import { LoginComponent } from './pages/login/login.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieshomeComponent } from './pages/movieshome/movieshome.component';

const routes: Routes = [
  { path: 'home', component: MovieshomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movie/:type/:id', component: MovieComponent },
  { path: 'addmovie', component: AddmovieComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
