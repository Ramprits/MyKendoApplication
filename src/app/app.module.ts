import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDetailComponent } from './comment/comment-detail/comment-detail.component';
import { CommentService } from 'app/comment/comment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { MenuComponent } from './menu/menu.component';
// Imports the Button module
// import { ButtonModule } from '@progress/kendo-angular-buttons';

// Imports the ButtonGroup module
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentDetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule,
    HttpModule,
    PDFModule, ButtonModule, ButtonGroupModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
