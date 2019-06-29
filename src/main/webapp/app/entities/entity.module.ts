import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#StudelyRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#StudelyCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#StudelyLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#StudelyDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#StudelyTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#StudelyEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#StudelyJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#StudelyJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudelyEntityModule {}
