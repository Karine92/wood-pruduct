import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work';
import { Working } from 'src/app/models/working';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  public form: any;
  public url1: string = ' http://localhost:3000/work_with';
  public url2: string = 'http://localhost:3000/our_work  ';
  public working: Working[] = [];
  public work: Work[] = [];
  constructor(public request: RequestService){}
  ngOnInit(): void {
    this.getWorking();
    this.getWork();
  }
  getWorking() {
    this.request.getWorking(this.url2).subscribe((geting: any) => {
      this.working = geting;
      console.log(this.working);
    })
  }
  getWork() {
    this.request.getWork(this.url1).subscribe((res: any) => {
      console.log("KHACHATRYAN");
      this.work = res;
      console.log(this.work);
    })
  }
}

