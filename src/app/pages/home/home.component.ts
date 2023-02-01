import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';
import {Observable} from "rxjs";
import { Data } from 'src/app/models/data';
import { Work } from 'src/app/models/work';
import { Working } from 'src/app/models/working';
import { Advantages } from 'src/app/models/advantages';
import { About } from 'src/app/models/about';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public form: any;
  public obs = new Observable();
  public url: string = 'http://localhost:3000/solid_wood_products';
  public url1: string = ' http://localhost:3000/work_with';
  public url2: string = 'http://localhost:3000/our_work  ';
  public url3: string = ' http://localhost:3000/advantages  ';
  public url4: string = ' http://localhost:3000/about_us  ';
  public data: Data[] = [];
  public work: Work[] = [];
  public working: Working[] = [];
  public advantages: Advantages[] = [];
  public about: About[] = [];

  constructor(public request: RequestService,
    public formBuild: FormBuilder) {

  }
  ngOnInit():void{
    this.form = this.formBuild.group({
      your_name: ['', Validators.compose([
        Validators.required, Validators.pattern(/^[a-z][A-Z]{1,}$/)
      ]
      )],
      number: ['', Validators.compose([
        Validators.required, Validators.pattern(/^[0-9]{1,}$/)
      ])]
    })
    this.getData();
    this.getWork();
    this.getWorking();
    this.getAdvantages();
    this.getAbout();
  }
  submit() {

  }
 
  getData() {
    this.request.getData(this.url).subscribe((get: any) => {
      console.log("KHACHATRYAN");
      this.data = get;
      console.log(this.data);
    })
  }
  getWork() {
    this.request.getWork(this.url1).subscribe((res: any) => {
      console.log("KHACHATRYAN");
      this.work = res;
      console.log(this.work);
    })
  }
  getWorking() {
    this.request.getWorking(this.url2).subscribe((geting: any) => {
      this.working = geting;
      console.log(this.working);
    })
  }
  getAdvantages() {
    this.request.getAdvantages(this.url3).subscribe((adv: any) => {
      this.advantages = adv;
      console.log(this.advantages);
    })
  }
  getAbout() {
    this.request.getAbout(this.url4).subscribe((us: any) => {
      this.about = us;
    })
  }
}
