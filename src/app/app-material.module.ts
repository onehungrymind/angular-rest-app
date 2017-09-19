import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule
  ]
})
export class AppMaterialModule {
}
