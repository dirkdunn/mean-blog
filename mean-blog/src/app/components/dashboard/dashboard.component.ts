import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postsUrl:string;
  posts: Post[];
  title:string;
  body:string;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postsUrl = 'http://localhost:3000/posts';
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log("DASH POSTS: ", this.posts);
    })
  }

  addPost(postTitle,postBody,e){
    e.preventDefault();
    console.log('postData: ', postTitle.value,postBody.value);
    this.postService.addPost(postTitle.value,postBody.value,this.posts);
    postTitle.value = "";
    postBody.value = "";
  }

  deletePost(postid,container){
    console.log('postid is: ',postid);
    this.postService.deletePost(postid,container);
  }

}

interface Post {
  title:string,
  body:string,
  postid:number
}
