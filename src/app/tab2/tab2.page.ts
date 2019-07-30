import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../services/swapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public planets:any
  public id:number

  constructor(
    private _swapi:SwapiService,
    private router: Router
  ) {}

    ngOnInit() {
      this.planets = this._swapi.getSwapi('planets')
      /*
      Utilizando el pipe async en el template,
      no hace falta utilizar la función getApi()
    */
      // this.getApi()
    }

    showItem(item) {
      let urlEl = item.url.split('/')
      // obtendo dos posiciones antes del último valor de la url
      this.id = urlEl[urlEl.length -2]
      this.router.navigateByUrl(`tabs/description/${this.id}`)
    }

    /*
      Utilizando el pipe async en el template,
      no hace falta subscribirse desde .ts
    */
    // getApi() {
    //   this._swapi.getSwapi('planets').subscribe(data => {
    //     this.planets = data
    //     console.log(this.planets)
    //   })
    // }

}
