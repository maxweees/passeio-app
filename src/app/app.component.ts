import { Component } from '@angular/core';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'passeio-app';

  constructor(){
    console.log('Ambiente atual:', );
    console.log('URL da API que o Angular está lendo:', environment.apiUrl);
  }
  
}
