import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // To WHAT I am binding. Host is a DOM element
  // akurat na w bootstrapie przy dropdownie jest
  // klasa open. Nie robimy teog bootstrapem bo tylko
  // angular powinien ingerowac w DOM (design pattern)
  // Mogę też bindować np. do backgroungColor elemntu i zmieniac go na mouseover i mouseleave
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
