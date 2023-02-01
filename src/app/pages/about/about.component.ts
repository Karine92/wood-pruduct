import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { About } from 'src/app/models/about';
import { Working } from 'src/app/models/working';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  public form: any;
  public url2: string = 'http://localhost:3000/our_work  ';
  public url4: string = ' http://localhost:3000/about_us  ';
  public about: About[] = [];
  public working: Working[] = [];
  constructor(public request: RequestService,
    public formBuild: FormBuilder){}
  ngOnInit(): void {
    this.form = this.formBuild.group({
      your_name: ['', Validators.compose([
        Validators.required, Validators.pattern(/^[a-z][A-Z]{1,}$/)
      ]
      )],
      number: ['', Validators.compose([
        Validators.required, Validators.pattern(/^[0-9]{1,}$/)
      ])]
    })
    this.getAbout();
    this.getWorking();
  }
  getAbout() {
    this.request.getAbout(this.url4).subscribe((us: any) => {
    this.about = us;
    })
  }
  getWorking() {
    this.request.getWorking(this.url2).subscribe((geting: any) => {
      this.working = geting;
    })
  }
}
