import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-script.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPreload: boolean = true;


  constructor(loadScript: LoadScriptsService) {

   }

  ngOnInit(): void {
       // Simula una operación asincrónica que toma tiempo
       setTimeout(() => {
        this.showPreload = false; // Oculta el preloader después de 3 segundos (ajusta el tiempo según tus necesidades)
      }, 3000);
    }
  }


