import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coment-form',
  templateUrl: './coment-form.component.html',
  styleUrls: ['./coment-form.component.css']
})

export class ComentFormComponent {

  constructor() { }

  onSubmit(textArea: string) {
    event.preventDefault();
    console.log(textArea);
  }

}
