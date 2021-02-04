import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPage } from '../articles/articles.page';
import { MyAppliedsPage } from '../my-applieds/my-applieds.page';
import { OffersPage } from '../offers/offers.page';
import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: UserTabsPage,
        children: [
            {
                path: 'articles',
                component: ArticlesPage
            },
            {
                path: 'offers',
                component: OffersPage
            },
            {
                path: 'applieds',
                component: MyAppliedsPage
            },
            {
                path: '',
                redirectTo: '/user/tabs/articles',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/user/tabs/articles',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UserTabsPageRoutingModule {}
