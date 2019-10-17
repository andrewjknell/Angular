import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {path: 'home', component: ShowComponent},
    {path: 'add', component: AddComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', component: PageNotFoundComponent }
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
