import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../servisces/post/post.service";

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  singlePost?: Post

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    this.activatedRoute.params.subscribe(value => {
      this.postService.getSinglePost(value.id).subscribe(data=>this.singlePost=data)
    })
  }

  ngOnInit(): void {
  }

}
