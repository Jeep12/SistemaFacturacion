import { Component, OnInit } from '@angular/core';
import { ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images: string[];
  constructor(private storage: AngularFireStorage) {
    this.images = [];
  }

  ngOnInit(): void {
    const imagesRef = ref(this.storage.storage, `images/banner`);
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





  slideConfig = {
    "slidesToShow": 1,
    "centerMode": true,
    "centerPadding": '30px',
    "speed": 3000,
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
