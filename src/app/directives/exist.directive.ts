import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExist]',
})
export class ExistDirective implements OnInit {
  @Input() appExist = true;

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    let doesExist = '';
    if (this.appExist) {
      doesExist = 'block';
    } else {
      doesExist = 'none';
    }

    this.renderer.setStyle(this.elem.nativeElement, 'display', doesExist);
  }
}
