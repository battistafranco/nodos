import {Component, Input, OnInit} from '@angular/core';
import {NodeServices} from './node.service';
import { Router } from '@angular/router';
import { Node } from '../models/node'

@Component({
  selector: 'nodo',
  template: `
    <li  *ngIf="node.show"
      (click)="gotoDetail(node)
      class="list-group-item">
      {{node.title}}
    </li>
  `
})
export class NodeComponent implements OnInit {
  
  @Input() node: Node;

  constructor ( private router: Router, public nodeServices: NodeServices) {}

  ngOnInit(){

        }
   gotoDetail(node: Node): void {
    this.router.navigate(['/detail', node.id]);
  }
}