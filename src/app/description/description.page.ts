import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { Observable } from 'rxjs'
import { TodosService } from '../services/todos.service';

// Interfaces
import { Todo } from './../interfaces/todo.interface'

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  public todo$: Observable<Todo>

  constructor(
    private _api:TodosService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let id = params.get('id')
      
      // guardo la data del get en la variable (observable) todo$
      return this._api.getApiById<Todo>(id).subscribe(data => {
        this.todo$ = data
      })
    })
  }

}
