import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl : './app.component.html',
  // template: `
  //   <h1>{{title}}</h1>
  //   <nav>     
  //     <a routerLink="/selectNode" routerLinkActive="active">Nodos</a>
  //   </nav>
  //   <router-outlet></router-outlet>

  // `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Monitoreo de Nodos';
}

   //   