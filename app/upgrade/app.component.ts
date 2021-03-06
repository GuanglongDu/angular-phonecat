import 'jquery';
import 'bootstrap';

import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';

import '../app.module';
import '../app.config';
import '../app.animations';
import '../core/core.module';
import '../core/phone/phone.module';
import '../core/phone/phone.service';
import '../core/checkmark/checkmark.filter';
import '../phone-detail/phone-detail.module';
import '../phone-detail/phone-detail.component';
import '../phone-list/phone-list.module';
import '../phone-list/phone-list.component';
import { Component, OnInit } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
@Component({
  selector: 'app-root',
  template: `<div ng-view class="view-frame"></div>`
})
export class AppComponent8 implements OnInit {

  constructor(private upgrade: UpgradeModule) {}

  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['phonecatApp']);
  }
}
