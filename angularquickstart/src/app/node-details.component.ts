import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Node } from '../models/node';
import { NodeServices } from './node.service';

@Component({
  moduleId: module.id,
  selector: 'my-node-detail',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements OnInit {
  node: Node;

  constructor(
    private nodeService: NodeServices,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.nodeService.getNode(+params['id']))
      .subscribe(node => this.node = node);
  }

  save(): void {
    this.nodeService.update(this.node)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}