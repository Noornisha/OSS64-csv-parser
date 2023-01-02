import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddNewEntryComponent } from './pages/add-new-entry/add-new-entry.component';
import { AnalyticsDashboardPageComponent } from './pages/analytics-dashboard-page/analytics-dashboard-page.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
const COMPONENTS = [AnalyticsDashboardPageComponent, AddNewEntryComponent];
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    NzTableModule,
    NzPageHeaderModule,
    NzTypographyModule,
    NzSpinModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        {
          name: 'min',
          message: (error, field: FormlyFieldConfig) => {
            return `This field should be greater than ${error.min}`;
          },
        },
        {
          name: 'max',
          message: (error, field: FormlyFieldConfig) =>
            `This field should be less than ${error.max}`,
        },
      ],
    }),
    NzButtonModule,
    NzCardModule,
  ],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
