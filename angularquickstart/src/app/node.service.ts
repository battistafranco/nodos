import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Node } from '../models/node';

@Injectable()
export class NodeServices {

  private nodesUrl = 'api/nodes';  // URL to web api
  nodesOnline: Node[];

  constructor(private http: Http) { 
  this.getNodesOnline();
  }

  getNodesOnline(): Node[] {
  let nod = this.getNodes().then(nodes => this.nodesOnline = nodes.filter(n => n.show));
  console.log(this.nodesOnline);
  return this.nodesOnline;
  }

  getNodes(): Promise<Node[]> {
    return this.http.get(this.nodesUrl)
               .toPromise()
               .then(response => response.json().data as Node[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  getNodesSlowly(): Promise<Node[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getNodes()), 2000);
    });
  }

 getNode(id: number): Promise<Node> {
  const url = `${this.nodesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Node)
    .catch(this.handleError);
}

private headers = new Headers({'Content-Type': 'application/json'});

update(node: Node): Promise<Node> {
  const url = `${this.nodesUrl}/${node.id}`;
  return this.http
    .put(url, JSON.stringify(node), {headers: this.headers})
    .toPromise()
    .then(() => node)
    .catch(this.handleError);
}

// quitNode(node: Node): void {
//  this.nodesOnline = this.nodesOnline.filter(item => item !== node);
// }

// addNode(node: Node): void {
//   this.nodesOnline.push(node);
// }

// create(name: string): Promise<Node> {
//   return this.http
//     .post(this.nodesUrl, JSON.stringify({name: name}), {headers: this.headers})
//     .toPromise()
//     .then(res => res.json().data)
//     .catch(this.handleError);
// }

// delete(id: number): Promise<void> {
//   const url = `${this.nodesUrl}/${id}`;
//   return this.http.delete(url, {headers: this.headers})
//     .toPromise()
//     .then(() => null)
//     .catch(this.handleError);
// }



}