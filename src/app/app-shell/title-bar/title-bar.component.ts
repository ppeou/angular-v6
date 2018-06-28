import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

  toggleMenu(e) {
    const appMenu = this.elementRef.nativeElement.querySelector('#app-menu');
    const elem = e.currentTarget;
    elem.classList.toggle('is-active');
    appMenu.classList.toggle('is-active');
  }

}
