import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { NodesComponent }       from './nodes.component';
import { NodeDetailsComponent } from './node-details.component';
import { SelectNodesComponent }  from './node-selection.component';
import { NodeServices }          from './node.service';
 import {SiNoPipe}                from './siNo.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NodesComponent,
    NodeDetailsComponent,
    SelectNodesComponent,
   SiNoPipe,
  ],
  providers: [ NodeServices ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
