import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  nextFunc() {
    let element =  this.el.nativeElement.parentElement.parentElement.children[0];
    let item = element.getElementsByClassName('item')
    element.append(item[0])

  }

}
