import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    // new needs to be first so the new word is not mistaken as id
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },

  {
    path: 'shopping-list', component: ShoppingListComponent
  },
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
