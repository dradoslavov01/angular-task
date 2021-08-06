import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "./post.service";
import { Posts } from './model';


@Component({
  selector: "app-root",
    template: `<kendo-grid [kendoGridBinding]="data" 
    [pageSize]="10" 
    [pageable]="true" 
    [sortable]="true"
    [filterable]="true"
    (edit)="editHandler($event)" 
    (cancel)="cancelHandler($event)" 
    (save)="saveHandler($event)" 
    >
        <kendo-grid-column field="id" title="ID" [width]="120">
        </kendo-grid-column>
        <kendo-grid-column field="title" title="Title">
        </kendo-grid-column>
        <kendo-grid-column field="body" title="Body">
        </kendo-grid-column>
        <kendo-grid-command-column title="Command" [width]="100">
        <ng-template kendoGridCellTemplate let-isNew="isNew">
            <button kendoGridEditCommand [primary]="true">Edit</button>
            <button kendoGridSaveCommand>Update</button>
            <button kendoGridCancelCommand>Cancel</button>
        </ng-template>
    </kendo-grid-command-column>
</kendo-grid>`,
    styleUrls: ['./app.component.css']
})


export class AppComponent {

  public data: any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
     this.data = posts;
     
    })
  }

  public editHandler({sender, rowIndex, dataItem}:any) {

    const group = new FormGroup({
        'title': new FormControl(dataItem.title, Validators.required),
        'body': new FormControl(dataItem.body, Validators.required),
        
    });    

    sender.editRow(rowIndex, group);
  }

    
  public cancelHandler({sender, rowIndex}:any) {
      sender.closeRow(rowIndex)
  }

  public saveHandler({sender, rowIndex, formGroup, dataItem,}:any) {
   
      const post: Posts = formGroup.value;
      dataItem.title = post.title;
      dataItem.body = post.body;
          
      sender.closeRow(rowIndex);
  }



}