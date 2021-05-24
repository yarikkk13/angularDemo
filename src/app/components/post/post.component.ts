import {Component, OnInit} from '@angular/core';
import {Post} from 'src/app/models/Post';
import {PostService} from "../../servisces/post/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts?: Post[];

  constructor(private postService: PostService) {
    postService.getAllPosts().subscribe(value => this.posts = value)
  }


}
