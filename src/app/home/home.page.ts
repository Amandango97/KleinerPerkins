import { Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('elementState', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('transparent => opaque',animate('0s 0.5s'))
    ]),
    trigger('elementState2', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('transparent => opaque', animate('0.1s 0.5s'))
    ]),
    trigger('elementState3', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('transparent => opaque', animate('0.5s 1s'))
    ]),
    trigger('elementState4', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('transparent => opaque', animate('1s 1s'))
    ]),
  ]
})
export class HomePage {

  constructor(public platform: Platform) {}

  state = "transparent";

  ngOnInit() {
    this.platform.ready().then(() => { 
      this.state = "opaque";
      });
  }




}
