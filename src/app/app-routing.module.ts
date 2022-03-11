import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: '' , redirectTo:'/loginpage',pathMatch: 'full'},
  {path: 'loginpage', component: LoginpageComponent},
  {path: 'sign-page', component: SignPageComponent},
  {path: 'user-page', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }