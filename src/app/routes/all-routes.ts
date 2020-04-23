import { Routes } from '@angular/router';
import { UserListComponent } from '../user/user-list/user-list.component';
import { UserResolverService } from '../shared/users-resolver.service';
import { UserDetailsComponent } from '../user/user-details/user-details.component';


// based on the module name in data - different footers will be rendered

export const ALL_ROUTES: Routes = [
    {
      path: 'users',
      component: UserListComponent,
      runGuardsAndResolvers:'always',
      resolve:{
        pageData: UserResolverService
      }
    },
    {
      path: '',
      redirectTo:'users',
      pathMatch: 'full'
    },
    {
      path: 'user/:id',
      component: UserDetailsComponent,
      runGuardsAndResolvers:'always',
      resolve:{
        pageData: UserResolverService
      }
    }
  ];
