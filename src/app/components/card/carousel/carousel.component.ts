import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() tipo!: string;
  titulo!: string;
  images: string[];
  constructor(private storage: AngularFireStorage) {
    this.images = [];
  }


  ngOnInit(): void {
    const option = this.tipo;

    const imagesRef = ref(this.storage.storage, `images/cards/${option}`);
    const list = listAll(imagesRef).then(async response => {
      this.images = [];
      for (let item of response.items) {
        const url = await getDownloadURL(item);
        this.images.push(url);

      }
    }).catch(error => {
      console.log(error)
    });
  }

  handleImageError(event: Event, slide: string) {
    console.log("Una imagen no cargo pero fue reestablecida");
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = "../../../../assets/images/errorImgCard.png"; // Cambiar la URL de la imagen
  }

   generarNumeroAleatorio(): number {
    const min = 2000;
    const max = 6000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  slideConfig = {
    "slidesToShow": 1,
    "centerMode": false,
    "speed": this.generarNumeroAleatorio(),
    autoplay: true,
    "arrows": false
  };


  slickInit(e: any) {
  }

  breakpoint(e: any) {
  }

  afterChange(e: any) {
  }

  beforeChange(e: any) {
  }


}
