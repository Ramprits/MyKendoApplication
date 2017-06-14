import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from 'app/comment/comment.component';

const routes: Routes = [
  {
    path: 'comments',
    component: CommentComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'comments' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
