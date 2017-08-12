import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  private devApiHost = 'http://localhost:3000/';
  private testPath = this.devApiHost+'testapi';
  private blogPath = this.devApiHost+'posts';

  constructor(public http:Http, private router:Router) {}

  getPosts(){
    return this.http.get(this.blogPath)
    .map(response => response.json());
  }

  addPost(title,body){
    this.http.post(this.blogPath,{
      title, body
    }).subscribe(response =>{
      console.log("POST FINISHED");
      this.router.navigate(['/']);
    })
  }

}
