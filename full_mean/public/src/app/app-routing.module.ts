import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  { path: 'products', component: IndexComponent },
  { path: 'products/:id/edit', component: EditComponent },
  { path: 'products/new', component: CreateComponent },
  { path: 'products/:id', component: ShowComponent },
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
