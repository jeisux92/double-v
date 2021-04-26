import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(x => {
      this.user = x
    });

    // this.route.paramMap.pipe(
    //   switchMap(async (params: ParamMap) => {

    //   }
    //   ));

  }

}
function switchMap(arg0: (params: ParamMap) => any): import("rxjs").OperatorFunction<ParamMap, unknown> {
  throw new Error('Function not implemented.');
}

