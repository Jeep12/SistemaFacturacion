import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-arch',
  templateUrl: './upload-arch.component.html',
  styleUrls: ['./upload-arch.component.css']
})
export class UploadArchComponent implements OnInit {
  images: string[];
  imageSelect!: any;
  cardSelect: string = "viesa";
  showModal: boolean[] = []; // Array de banderas para controlar la visibilidad de los modales

  imageURL: string = "";
  @ViewChild('staticBackdrop') staticBackdrop: ElementRef | undefined; // Referencia al elemento del modal

  constructor(private storage: AngularFireStorage,private toastr:ToastrService) {
    this.images = [];


  }

  ngOnInit(): void {
    this.opcionSeleccionada();
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
    const imgRef = ref(this.storage.storage, `images/cards/${option}/${file.name}`);
    uploadBytes(imgRef, file).then(response => {

      this.toastr.success("Imagen cargada correctamente","Imagen");
      this.imageURL = ""; // Limpia el valor de la variable imageURL
    }).catch(error => {
      this.toastr.error("Se produjo un error subiendo la iamgen","Error");
    });
  }

  deleteImage(name: string,index:number) {
    const option = this.cardSelect;
    const imageRef = this.storage.ref(`images/cards/${option}/${name}`);
    imageRef.delete().subscribe(() => {
      this.toastr.success('Imagen borrada correctamente');
      this.opcionSeleccionada();
      this.closeModal(index); // Cerrar el modal específico
    }, (error) => {
      this.toastr.error('Error al borrar la imagen:');
    });
  }

  imgSelect(image:any,index:number) {
    console.log(this.imageSelect.items[index].name);
    this.deleteImage(this.imageSelect.items[index].name,index);

  }




  upload(){
    this.opcionSeleccionada(); // Actualiza la lista de imágenes después de cargar la imagen

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




openModal(index: number) {
  this.showModal[index] = true;
  const body = document.getElementsByTagName('body')[index];
  body.classList.add('modal-open');
  const backdropDiv = document.createElement('div');
  backdropDiv.classList.add('modal-backdrop', 'fade', 'show');
  body.appendChild(backdropDiv);
  body.style.overflow = 'hidden';
}

  closeModal(index: number) {
    this.showModal[index] = false;
    const body = document.getElementsByTagName('body')[index];
    body.classList.remove('modal-open');
    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[index];
    modalBackdrop?.parentNode?.removeChild(modalBackdrop);
    body.style.overflow = 'auto';
  }
}
