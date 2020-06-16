import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Optimista',
      url: '/methods/optimist',
      icon: 'happy'
    },
    {
      title: 'Pesimista',
      url: 'methods/pessimistic',
      icon: 'sad'
    },
    {
      title: 'Arrepentimientos',
      url: 'methods/regrets',
      icon: 'arrow-undo-circle'
    },
    {
      title: 'Hurwicz',
      url: 'methods/hurwicz',
      icon: 'resize'
    },
    {
      title: 'Laplace',
      url: 'methods/laplace',
      icon: 'mail'
    },
    {
      title: 'Wald',
      url: 'methods/wald',
      icon: 'paper-plane'
    },
    {
      title: 'Savage',
      url: 'methods/savage',
      icon: 'mail'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
