import { Component } from '@angular/core';
declare let $:any;
let bandera_dropdown = true
let bandera_sidebar = true

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent {

  public OpenCloseDropdown() {
    if (bandera_dropdown === true) {
      $('.dropdown').css('display','block')
      bandera_dropdown = false
    } else {
      $('.dropdown').css('display','none')
      bandera_dropdown = true
    }
  }
  
    public OpenCloseSidebar() {
      if (bandera_sidebar === true) {
        $('.sidebar').css('height','70vh')
        $('.btn-sidebar').css('transform','rotateZ(90deg)')
        bandera_sidebar = false
      } else {
        $('.sidebar').css('height','60px')
        $('.btn-sidebar').css('transform','rotateZ(0deg)')
        bandera_sidebar = true
      }
    }

    public dbl() {
      $('.imagenes').css('background','black')

    }

    public click() {
      $('.imagenes').css('background','green')
    }
}
