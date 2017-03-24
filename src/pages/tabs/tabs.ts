import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DashboardPage;
  tab2Root: any = DashboardPage;
  tab3Root: any = DashboardPage;
  tab4Root: any = DashboardPage;
  tab5Root: any = DashboardPage;

  constructor() {

  }
}
