import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id:string='';
  userDetails = null;
  constructor(
    private _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id= this._activatedRoute.snapshot.params.id;
    this.userDetails = this._activatedRoute.snapshot.data.pageData.data;
    // console.log(pageContent);
  }

}

