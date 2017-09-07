import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {RoutingModule} from './routing.module';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {TopbarComponent} from './layout/topbar/topbar.component';
import {DiigoService} from './service/diigo.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    RoutingModule,
    HttpModule
  ],
  providers: [DiigoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
