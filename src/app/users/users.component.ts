import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute) { }

   @Input() id: string ='' ;
    

  ngOnInit(): void {
    this.checkId();
  }

  checkId(){
     this._activatedRoute.params.subscribe(parameter => {        
      if(parameter['id']!=undefined){
        this.id= `The id: ${parameter['id']}.`;  
      }       
    })
  }

}
