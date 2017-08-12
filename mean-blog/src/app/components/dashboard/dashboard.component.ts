import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:string;
  body:string;

  constructor(
    private postService: PostsService) { }

  ngOnInit() {
  }

  addPost(postTitle,postBody,e){
    // e.preventDefault();
    console.log('postData: ', postTitle.value,postBody.value);
    this.postService.addPost(postTitle.value,postBody.value);
  }

}
