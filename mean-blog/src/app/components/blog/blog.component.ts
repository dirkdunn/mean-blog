import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts:Post[];

  constructor(private postService:PostsService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log('POSTS: ' , posts)
      this.posts = posts.reverse();
    })
  }

}

interface Post {
  title:string,
  body:string,
  postid:number
}
