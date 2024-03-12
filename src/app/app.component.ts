import { Component, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from './master.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'task';
  serveSubs?: Subscription;

  constructor(private service: MasterService) { }

  ngOnInit(): void {
    this.serveSubs = this.service.fetchUserPosts().subscribe((res: any) => {
      console.log("User posts:", res);
    })
  }

  ngOnDestroy(): void {
    this.serveSubs?.unsubscribe();
  }
}
