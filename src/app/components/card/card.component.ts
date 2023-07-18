import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() type!: string;

  readonly contentCard = [
    {
      type: "viesa",
      content: { title: "Viesa", text: "Viesa es un sistema de enfriamiento ecológico capaz de reducir la temperatura" }
    },
    {
      type: "VigiaMotor",
      content: { title: "Vigía Motor", text: "Vigía Motor es un sistema de monitoreo y protección para motores" }
    },
    {
      type: "VigiaGomas",
      content: { title: "Vigía Gomas", text: "Vigía Gomas es un sistema de monitoreo y protección para neumáticos" }
    },
    {
      type: "Electricidad",
      content: { title: "Electricidad", text: "Electricidad es un sistema de control y protección para circuitos eléctricos" }
    },
    {
      type: "refrigeracion",
      content: { title: "Aire Acondicionado", text: "Reparacion y mantenimiento de sistemas de aire acondicionados" }
    },
    {
      type: "agro",
      content: { title: "Servicio Agro", text: "Reparacion y mantenimiento para maquinarias agricolas, zona De La Garma  " }
    }
  ];

  cardSelect = {
    title: "",
    text: ""
  };

  constructor( ) {

  }
  ngOnInit(): void {
    for (let i = 0; i < this.contentCard.length; i++) {
      if (this.type == this.contentCard[i].type) {
        this.cardSelect.title = this.contentCard[i].content.title;
        this.cardSelect.text = this.contentCard[i].content.text;
      }
      if (!this.cardSelect) {
        // El tipo de tarjeta seleccionado no coincide con ningún tipo definido en contentCard
        // Puedes manejar este caso o mostrar un mensaje de error
      }
    }
  }


}

