/**
 * Author:        Hessan Adnani (Sorxmedia Inc. https://sorxmedia.com)
 * (c) Copyright by Sorxmedia Inc.
 **/

import {NgModule} from '@angular/core';
import {TestElementComponent} from './test-element';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

const MATERIAL  = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL
  ],
  exports: [
    TestElementComponent
  ],
  declarations: [TestElementComponent]
})
export class TestElementModule {
}
