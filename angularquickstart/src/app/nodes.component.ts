import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { Node } from '../models/node';
import { NodeServices } from './node.service';

@Component({
  moduleId: module.id,
  selector: 'my-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  @Input() nodes: Node[];
  selectedNode: Node;

  constructor(
    private router: Router,
    private nodeService: NodeServices) { }

  getNodes(): void {
    this.nodeService.getNodes().then(nodes => this.nodes = nodes.filter(n => n.show));
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChange) {
    this.getNodes();
    console.log("algo cambio");
  }

  // onSelect(node: Node): void {
  //   this.selectedNode = node;
  // }

  gotoDetail(node: Node): void {
    this.router.navigate(['/detail', node.id]);
  }

  //   delete(hero: Hero): void {
  //   this.heroService
  //       .delete(hero.id)
  //       .then(() => {
  //         this.heroes = this.heroes.filter(h => h !== hero);
  //         if (this.selectedHero === hero) { this.selectedHero = null; }
  //       });
  // }

  //   add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }
}