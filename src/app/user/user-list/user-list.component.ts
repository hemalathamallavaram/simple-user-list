import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../shared/users-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy {
  totalPages = 0;
  totalPagesArray = [];
  users = [];
  adDetails = null;
  private _unsubscribe$ = new Subject<boolean>();
  constructor(
    private _service:UsersService,
    private _router:Router,
    private _activatedRoute:ActivatedRoute

  ) { }

  ngOnInit(): void {
    const pageContent = this._activatedRoute.snapshot.data.pageData;
    console.log(pageContent);
    if(pageContent){
      this.users = pageContent.data;
      this.totalPages = pageContent.total_pages;
      this.adDetails = pageContent.ad;
      this.preparePaginationArray();
    }
  }
  ngOnDestroy(){
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete(); 
  }
  preparePaginationArray(){
    this.totalPagesArray = new Array(this.totalPages).fill(0).map((val,i)=>i+1);
  }
  fetchUsers(page){
    this._service.fetchAllUsers(page).pipe(
      takeUntil(this._unsubscribe$)
    ).subscribe((res)=>{
      this.users = (res['data']);
      this.adDetails = res['ad'];
    })
  }
  fetchUsersInPage(page){
    this.fetchUsers(page)
  }
  navigateToPage(page){
    this._router.navigateByUrl(`/user/${page}`)
  }
  goToDetailPage(id){
    this._router.navigateByUrl(`/user/${id}`)
  }
}

