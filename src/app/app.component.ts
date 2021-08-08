import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  rows:any;
  public ColumnMode = ColumnMode;
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get("https://bookmarkapi.azurewebsites.net/api/BookMark").subscribe(
      (res)=>{
        console.log(res);
        this.rows=res;
      }
    );
  }
  
}
