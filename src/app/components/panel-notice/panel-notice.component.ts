import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FirestoreNoticesService } from 'src/app/services/firestore-notices.service';

@Component({
  selector: 'app-panel-notice',
  templateUrl: './panel-notice.component.html',
  styleUrls: ['./panel-notice.component.css']
})
export class PanelNoticeComponent implements OnInit {
  noticiaContent: string = '';
  today: string;
  blog = {
    tittle: '',
    description: ""
  }
  constructor(private fsNotice: FirestoreNoticesService) {
    const todayObj = new Date();
    this.today = todayObj.toLocaleDateString();
  }

  ngOnInit(): void {
  }
  saveNotice(forma: NgForm) {
    let hoy = new Date();

    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1; // Se suma 1 porque los meses comienzan desde 0
    let año = hoy.getFullYear();
    let hora = hoy.getHours();
    let minuts = hoy.getMinutes();
    let seconds = hoy.getSeconds();

    let fecha = `${dia}/${mes}/${año} - ${hora}:${minuts}:${seconds}`;

    this.fsNotice.saveNotice(forma.value.tittle, forma.value.description, fecha);
  }

}
