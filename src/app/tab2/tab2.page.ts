import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { Observable } from 'rxjs'
import { TodosService } from '../services/todos.service';

// Intrefaces
import { Todo } from "./../interfaces/todo.interface";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public todos$: Observable<Todo>
  public id:number

  constructor(
    private _api:TodosService,
    private router: Router
  ) {}

    ngOnInit() {
      this.todos$ = this._api.getApi<Todo[]>('todos')
    }

    showItem(id) {
      this.router.navigateByUrl(`tabs/description/${id}`)
    }
}
