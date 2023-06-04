import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.addUnderline();
    this.boldTags();
    this.addBorderToContentCard();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeUnderline();
    this.removeBoldTags();
    this.removeBorderFromContentCard();
  }

  private addUnderline() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'underline');
  }

  private removeUnderline() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'none');
  }

  private boldTags() {
    const tags = this.elementRef.nativeElement.getElementsByTagName('span');
    for (let i = 0; i < tags.length; i++) {
      this.renderer.setStyle(tags[i], 'font-weight', 'bold');
    }
  }

  private removeBoldTags() {
    const tags = this.elementRef.nativeElement.getElementsByTagName('span');
    for (let i = 0; i < tags.length; i++) {
      this.renderer.removeStyle(tags[i], 'font-weight');
    }
  }

  private addBorderToContentCard() {
    const contentCard = this.elementRef.nativeElement.closest('.app-content-card');
    if (contentCard) {
      this.renderer.setStyle(contentCard, 'border', '2px solid blue');
    }
  }

  private removeBorderFromContentCard() {
    const contentCard = this.elementRef.nativeElement.closest('.app-content-card');
    if (contentCard) {
      this.renderer.removeStyle(contentCard, 'border');
    }
  }
}