import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';
import { RequestComponent } from './request/request.component';
import { TopExamComponent } from './top-exam/top-exam.component';

const routes: Routes = [
  {
    path: '',
    component: FindJobComponent,
  },
  {
    path: 'top-exam',
    component: TopExamComponent,
  },
  {
    path: 'request',
    component: RequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
