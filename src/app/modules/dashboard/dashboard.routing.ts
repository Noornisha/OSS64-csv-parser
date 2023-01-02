import { RouterModule, Routes } from '@angular/router';

import { AddNewEntryComponent } from './pages/add-new-entry/add-new-entry.component';
import { AnalyticsDashboardPageComponent } from './pages/analytics-dashboard-page/analytics-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'analytics',
  },
  {
    path: 'analytics',
    component: AnalyticsDashboardPageComponent,
  },
  {
    path: 'add-new-entry',
    component: AddNewEntryComponent,
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
