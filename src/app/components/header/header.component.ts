import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 public style: any = {
  color: 'blue',
  fontSize: '30px'
 };
  ngOnInit(): void {
   this.click();
  }
  click() {
    return this.style;
  }
}
