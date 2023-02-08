import { Component } from '@angular/core';
declare let $:any;
let bandera_dropdown = true;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  public OpenCloseDropdown() {
    if (bandera_dropdown === true) {
      $('.dropdown').css('display','block')
      bandera_dropdown = false
    } else {
      $('.dropdown').css('display','none')
      bandera_dropdown = true
    }
  }
}

