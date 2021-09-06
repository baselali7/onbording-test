import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ModalComponent } from './components/modal/modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { MainMuneComponent } from './components/main-mune/main-mune.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
    MainMuneComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NzTagModule, NzBreadCrumbModule, NzDropDownModule, NzToolTipModule, NzPageHeaderModule, NzModalModule, NzDividerModule, NzButtonModule, NzTableModule, FormsModule, HttpClientModule, BrowserAnimationsModule, IconsProviderModule, NzLayoutModule, NzMenuModule
  ],
  exports: [NzTableModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
