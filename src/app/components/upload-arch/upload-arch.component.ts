import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-upload-arch',
  templateUrl: './upload-arch.component.html',
  styleUrls: ['./upload-arch.component.css']
})
export class UploadArchComponent implements OnInit {
  images: string[];
  imageSelect!: any;
  cardSelect: string = "viesa";

  imageURL: string = "";

  constructor(private storage: AngularFireStorage) {
    this.images = [];

  }

  ngOnInit(): void {
  }





  showPreview($event: any) {
    const file = $event.target.files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  uploadImage($event: any) {
    const file = $event.target.files[0];
    const option = this.cardSelect;


    this.showPreview($event);
    const imgRef = ref(this.storage.storage, `images/cards/${option}/${file.name}`);
    uploadBytes(imgRef, file).then(response => {
      console.log(response);
      console.log("imagen subida")

    }).catch(error => {
      console.log(error);
    });
  }













  upload(){

  }


  datos(index: number) {
    console.log(this.imageSelect.items[index].name);


  }
  opcionSeleccionada() {
    const option = this.cardSelect;
    const imagesRef = ref(this.storage.storage, `images/cards/${option}`);
    const list = listAll(imagesRef).then(async response => {
      this.images = [];
      this.imageSelect = response;
      for (let item of response.items) {
        const url = await getDownloadURL(item);
        this.images.push(url);

      }

    }).catch(error => {
      console.log(error)
    });
  }






}
