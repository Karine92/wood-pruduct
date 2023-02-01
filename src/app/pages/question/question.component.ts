import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit { 
  public form: any;
  public url7: string = '  http://localhost:3000/question  ';
  public question: Question[] = [];
  constructor(public request: RequestService, 
    public formBuild: FormBuilder) {}
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
    this.getQuestion();
  }
  submit() {

  }
  getQuestion() {
    this.request.getQuestion(this.url7).subscribe((quest: any) => {
      this.question = quest;
    })
  }
}
