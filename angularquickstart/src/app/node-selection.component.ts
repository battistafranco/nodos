import { Component, OnInit } from '@angular/core';
import { NodeServices } from './node.service';
import { NodesComponent } from './nodes.component';
import { Node } from '../models/node';

@Component({
  moduleId: module.id,
  selector: 'node-selection-component',
  templateUrl: './node-selection.component.html',
  styles: [
    `  .selected {
    background-color: green;
        }
  `  ]
})

export class SelectNodesComponent implements OnInit {

  nodes: Node[];
  selectedNode: Node;
  show: boolean;

  constructor(private nodesService: NodeServices) {
  }

  monitorearNodo(node: Node) {
    node.show = !node.show;
    this.nodesService.update(node).then(() => this.selectedNode = node);
    this.nodesService.getNodes().then(nods => this.nodes = nods);
  }



  getNodes(): void {
    this.nodesService.getNodes().then(nods => this.nodes = nods);
  }

  ngOnInit(): void {
    this.getNodes();
  }

}
