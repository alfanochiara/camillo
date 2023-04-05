import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  routes ;

  pageTitle = 'Home';

  constructor(private router: Router) {

    this.routes = this.router.config.map((route: Route) => route?.path || 'Home');

  }

  changeRoute(route: string): void {
    this.pageTitle = route;
    const pathToGo = route === 'Home' ? '/' : route;
    this.router.navigate([pathToGo]);
  }

  gotoHome(){
    this.router.navigate(["home"]);
  }

}
