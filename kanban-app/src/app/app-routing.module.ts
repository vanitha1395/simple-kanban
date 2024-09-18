import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
// import { AddTaskComponent } from './add-task/add-task.component';
// import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'board', component: BoardComponent },
//   { path: 'add-task', component: AddTaskComponent },
//   { path: 'edit-task/:id', component: EditTaskComponent },
  { path: '**', redirectTo: '/board' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
