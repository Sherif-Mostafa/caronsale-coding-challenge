import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CONFIG } from './shared/constants/pages-config';
import { OverviewGuard } from './overview/overview.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: CONFIG.LOGIN.name,
    pathMatch: 'full'
  },
  {
    path: CONFIG.LOGIN.name,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: CONFIG.OVERVIEW.name,
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
    canActivate: [OverviewGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
