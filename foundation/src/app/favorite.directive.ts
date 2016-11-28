import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
 
  @HostBinding('class.is-favorite') isFavorite;
  @HostBinding('class.is-favorite-hover') hovering=false;
  @HostListener('mouseenter') onMouseEnter(){
    this.hovering=true;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hovering=false;
  }
  @Input() set mwFavorite(value){
     this.isFavorite = value;
  } 

  constructor() { }

}
