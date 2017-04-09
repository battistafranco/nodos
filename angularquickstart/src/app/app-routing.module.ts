import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NodesComponent }   from './nodes.component';
import { NodeDetailsComponent }      from './node-details.component';
import { SelectNodesComponent }  from './node-selection.component';


const routes: Routes = [
  { path: '', redirectTo: '/selectNode', pathMatch: 'full' },
  { path: 'nodes',  component: NodesComponent },
  { path: 'detail/:id', component: NodeDetailsComponent },
  { path: 'selectNode',     component: SelectNodesComponent },



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}