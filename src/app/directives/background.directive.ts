import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @Input() appBackground = 'white'
  @Input() appBackgroundTextColor = 'black'
  

  constructor(private elem: ElementRef, private renderer: Renderer2) {} //element reference aka DOM, then nativeElement is the actual element, needed when direct editing is needed

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'background-color',
      this.appBackground
    );
    this.renderer.setStyle(
      this.elem.nativeElement,
      'color',
      this.appBackgroundTextColor
    );
  }

}
