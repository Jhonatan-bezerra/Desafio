import { Component } from '@angular/core';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular';

  constructor(private listaSevice: ListaService ){

  }

  obterTodasLista(){
    this.listaSevice.obterTodos()
      .then(lista => console.log(lista))
      .catch(error => console.log(error));
      
  }
  

}
