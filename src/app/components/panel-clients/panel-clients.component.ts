import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Criterio } from 'src/app/Sistema/CriteriosBusqueda/Criterio';
import { CriterioPorDireccion } from 'src/app/Sistema/CriteriosBusqueda/CriterioPorDireccion';
import { CriterioPorEdad } from 'src/app/Sistema/CriteriosBusqueda/CriterioPorEdad';
import { CriterioPorEmail } from 'src/app/Sistema/CriteriosBusqueda/CriterioPorEmail';
import { CriterioPorNombre } from 'src/app/Sistema/CriteriosBusqueda/CriterioPorNombre';
import { CriterioPorNumero } from 'src/app/Sistema/CriteriosBusqueda/CriterioPorNumero';
import { CriterioVerificado } from 'src/app/Sistema/CriteriosBusqueda/CriterioVerificado';

import { Usuario } from 'src/app/Sistema/Usuario';
import { FirestoreUsersService } from 'src/app/services/firestore-users.service';

@Component({
  selector: 'app-panel-clients',
  templateUrl: './panel-clients.component.html',
  styleUrls: ['./panel-clients.component.css']
})
export class PanelClientsComponent implements OnInit {
  originalUsers: Usuario[] = []; // Copia del arreglo original
  users: Usuario[] = [];
  // En el componente TypeScript
  showDropdown: boolean[] = [];
  showDropdownIndex: number = -1;


  orderBy: string = 'admin'; // Valor predeterminado para el ordenamiento


  searchSelect: string = "nombre";
  criterio: Criterio | null = null;;
  searchText: string = '';

  private subscription: Subscription | any;
  constructor(private fsUsers: FirestoreUsersService, private toastr: ToastrService) { }



  ngOnInit(): void {
    this.subscription = this.fsUsers.getAllusers().subscribe(usuarios => {
      this.originalUsers = [];
      this.users = [];
      for (let i = 0; i < usuarios.length; i++) {
        let user = new Usuario(
          usuarios[i].uid,
          usuarios[i].isVerify,
          usuarios[i].displayName,
          usuarios[i].email,
          usuarios[i].rol,
          usuarios[i].direction,
          usuarios[i].birthdate,
          usuarios[i].phoneNumber
        );
        this.originalUsers.push(user);
        this.users.push(user);
      }
    });
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  toggleDropdown(index: number) {
    if (this.showDropdownIndex === index) {
      this.showDropdownIndex = -1;
    } else {
      this.showDropdownIndex = index;
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  closeDropdown() {
    this.showDropdownIndex = -1;
  }

  showAll(){
    this.users = this.originalUsers;
  }
  optionSearch(): void {
    this.users = [...this.originalUsers]; // Restablece el arreglo de usuarios a su estado original
    this.criterio = null; // Restablece el criterio de búsqueda

    switch (this.searchSelect) {
      case 'nombre':
        this.criterio = new CriterioPorNombre(this.searchText);
        break;
      case 'edad':
        this.criterio = new CriterioPorEdad(this.searchText);
        break;
      case 'verificado':
        this.criterio = new CriterioVerificado();
        break;
      case 'numero':
        this.criterio = new CriterioPorNumero(this.searchText);
        break;
      case 'direction':
        this.criterio = new CriterioPorDireccion(this.searchText);
        break;
      case 'email':
        this.criterio = new CriterioPorEmail(this.searchText);
        break;
    }

  }

  realizarBusqueda() {
    this.optionSearch();
    let result: Usuario[] = [];
    console.log(this.criterio);
    for (let i = 0; i < this.originalUsers.length; i++) {
      if (this.criterio?.cumpleCriterio(this.originalUsers[i])) {
        result.push(this.originalUsers[i]);
      }
    }
    if (result.length === 0) {
      this.toastr.warning("No se encontró ningún usuario");
    } else {
      this.users = result;
    }
  }



  ordenar() {
    this.orderBy;
    console.log(this.orderBy);
    switch (this.orderBy) {
      case 'nombre':
        this.users.sort((a, b) => a.getDisplayName().toLowerCase().localeCompare(b.getDisplayName().toLowerCase())).reverse();
        break;
      case 'edad':
        this.users.sort((a, b) => a.calcularEdad() - b.calcularEdad()).reverse();
        break;
      case 'numero':
        this.users.sort((a, b) => a.getPhoneNumber() - b.getPhoneNumber()).reverse();
        break;
      case 'email':
        this.users.sort((a, b) => a.getEmail().toLowerCase().localeCompare(b.getEmail().toLowerCase())).reverse();
        break;
      case 'direction':
        this.users.sort((a, b) => a.getDirection().toLowerCase().localeCompare(b.getDirection().toLowerCase())).reverse();
        break;
      case 'verificado':
        this.users.sort((a, b) => {
          if (a.getVerify() && !b.getVerify()) {
            return -1;
          } else if (!a.getVerify() && b.getVerify()) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      case 'admin':
        this.users.sort((a, b) => {
          if (a.isAdmin() && !b.isAdmin()) {
            return -1;
          } else if (!a.isAdmin() && b.isAdmin()) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
    }
  }


}
