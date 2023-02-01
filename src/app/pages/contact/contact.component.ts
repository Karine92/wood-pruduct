import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  public url6: string = 'http://localhost:3000/contact  ';
  public contact: Contact[] = [];
  constructor(public request: RequestService) {}
  ngOnInit(): void {
    this.getContact();
  }
  getContact() {
    this.request.getAbout(this.url6).subscribe((cont: any) => {
      this.contact = cont;
    })
  }
}
