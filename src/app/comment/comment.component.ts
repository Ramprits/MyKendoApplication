import { OnInit, ViewEncapsulation } from '@angular/core';
import { CommentService } from 'app/comment/comment.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { State } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid/dist/es/data.collection';
@Component({
  selector: 'yo-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentComponent implements OnInit {
  errorMessage: any;
  comments: any[];
  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 5
  };
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments()
      .subscribe(Comments => this.comments = Comments,
      error => this.errorMessage = <any>error);
  }

}
