import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listafilm';

  ngOnInit() {
    document.body.className = "selector";
  }

ngOnDestroy(){
    document.body.className="";
  }
  
}
