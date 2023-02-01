import { Component, OnInit } from '@angular/core';
import { Price } from 'src/app/models/price';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit{
  public url5: string = '  http://localhost:3000/price  ';
  public price: Price[] =[];
  constructor (public request: RequestService) {}
  ngOnInit(): void {
    this.getPrice();
  }
  getPrice() {
    this.request.getPrice(this.url5).subscribe((pric: any) => {
      this.price = pric;
    })
     
  }
}
