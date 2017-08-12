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

  addPost(title,body,posts){
    this.http.post(this.blogPath,{
      title, body
    }).map(response => response.json()).subscribe(response =>{
      posts.unshift({
        title,
        body,
        postid: response.postid,
        _id: response._id
      });
    });
  }

  deletePost(postid,target){
    console.log('TARGET ',target);
    this.http.delete(`${this.blogPath}/${postid}`).subscribe(response => {
      console.log("DELETE FINISHED: ",response);
      target.style.display = 'none';
      // this.router.navigate(['/dash']);
    })
  }

}
