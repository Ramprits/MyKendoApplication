import { Component, OnInit } from '@angular/core';
import { CommentService } from 'app/comment/comment.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'yo-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {
  sub: Subscription;
  comment: any;
  errorMessage: any;

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        const id = +params['id'];
        this.getcomment(id);
      });
  }
  getcomment(id: number) {
    this.commentService.getComment(id).subscribe(
      comment => this.comment = comment,
      error => this.errorMessage = <any>error);
  }
}
