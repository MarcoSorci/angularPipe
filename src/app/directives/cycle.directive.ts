import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCycle]'
})
export class CycleDirective implements OnInit {

  @Input() appCycle = 'Subtitle Wowee'

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {

    const paragraph = this.renderer.createElement('p')
    paragraph.createText(this.appCycle)

    this.elem.nativeElement.appendChild(paragraph)
    
  }
}
