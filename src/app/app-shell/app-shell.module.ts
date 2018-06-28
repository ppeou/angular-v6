import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleBarComponent} from './title-bar/title-bar.component';
import {ContentBodyComponent} from './content-body/content-body.component';
import {StatusBarComponent} from './status-bar/status-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleBarComponent,
    ContentBodyComponent,
    StatusBarComponent
  ],
  exports: [
    TitleBarComponent,
    ContentBodyComponent,
    StatusBarComponent
  ]
})
export class AppShellModule {
}
