import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images = [
    { id: '1', src: 'assets/images/class1.jpg' },
    { id: '2', src: 'assets/images/bg1.jpg' },
    { id: '3', src: 'assets/images/yoga.jpg' },
    { id: '4', src: 'assets/images/about.jpg' },
    { id: '5', src: 'assets/images/yoga-about.jpg' },
    { id: '6', src: 'assets/images/bg-trainers.jpg' },
    { id: '7', src: 'assets/images/class3.jpg' }
  ];
  imgSrc: string | undefined;
  showPopup: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openImage(imageSrc: string) {
    this.imgSrc = imageSrc;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.imgSrc = undefined; // Clear the image source when closing the popup
  }
}
