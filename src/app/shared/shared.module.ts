import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { NoScrollDirective } from './directives/no-scroll.directive';
import { ClickShadowDirective } from './directives/click-shadow.directive';

const EXPORTED_COMPONENTS = [
  HighlightDirective,
  NoScrollDirective,
  ClickShadowDirective
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
  ],
  exports: [
    ...EXPORTED_COMPONENTS,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
