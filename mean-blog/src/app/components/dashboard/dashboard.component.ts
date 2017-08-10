import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:string;
  body:string;

  constructor(
    private postService: PostsService,
    private router: Router) { }

  ngOnInit() {
  }

  addPost(postTitle,postBody){
    console.log('postData: ', postTitle.value,postBody.value);
    this.postService.addPost(postTitle.value,postBody.value);
    this.router.navigate(['/']);
  }

}
