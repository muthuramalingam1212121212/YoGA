import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  modalRef: BsModalRef | undefined;
  @ViewChild('template') modalTemplate!: TemplateRef<any>; // Add ! to indicate it will be initialized

  images = [
    { id: '1', src: 'assets/images/class1.jpg' },
    { id: '2', src: 'assets/images/bg1.jpg' },
    { id: '3', src: 'assets/images/yoga.jpg' },
    { id: '4', src: 'assets/images/about.jpg' },
    { id: '5', src: 'assets/images/yoga-about.jpg' },
    { id: '6', src: 'assets/images/bg-trainers.jpg' },
    { id: '7', src: 'assets/images/class3.jpg' }
  ];
  constructor(private modalService: BsModalService) { }
  imgSrc :any
  ngOnInit(): void {}
  onClick(event: any){
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    console.log(srcAttr.nodeValue)
    this.imgSrc = srcAttr.nodeValue;
  }
  openModal(image: any) {
    console.log(image);
    const initialState = {
      id: image.id,
      img: image.src // Pass the image object
    };
    this.modalRef = this.modalService.show(this.modalTemplate, { initialState });
    console.log(this.modalRef);
  }
  closeModal() {
    // Close the modal
    this.modalRef?.hide();
  }
}

