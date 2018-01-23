import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', component: RecipesComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: ':id/', component: RecipeDetailComponent}
    ]
  },

  {
    path: 'shoppingList', component: ShoppingListComponent
  },
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: '/not-found'}
// ** means catch all you do not know- must be the last route
//  { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
];

@NgModule({
  imports: [
    // webserver will ignore things after hashtag
    // RouterModule.forRoot(appRoutes, {useHash: true})],
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
