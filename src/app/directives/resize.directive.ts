import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResize]'
})
export class ResizeDirective implements OnInit {

  @Input() appResize = "inline-block"
  @Input() appResizeW = '200px'
  @Input() appResizeH = '100px'

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'display',
      this.appResize
    );
    this.renderer.setStyle(
      this.elem.nativeElement,
      'width',
      this.appResizeW
    );
    this.renderer.setStyle(
      this.elem.nativeElement,
      'height',
      this.appResizeH
    );

  }

}
