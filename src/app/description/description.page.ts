import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  public planet:any

  constructor(
    private _swapi:SwapiService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      let id = params.get('id')
      
      // evito error de que no exista info en el template
      // o puedo utilizar el safe ? en el template y quitar this.plante=
      this.planet = this._swapi.getSwapi(`planets/${id}`).subscribe(data => {
        this.planet = data
      })
    })
  }

}
