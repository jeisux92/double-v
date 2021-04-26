import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-graph',
  templateUrl: './user-graph.component.html',
  styleUrls: ['./user-graph.component.scss']
})
export class UserGraphComponent implements OnInit, OnChanges {
  barChartData: ChartDataSets[] = []
  barChartLabels: Label[] = []
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() users: any[] = [];

  constructor(private userService: UserService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.users && !changes.users.firstChange) {
      this.loadUsers()
    }
  }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    const users: Promise<any>[] = this.users.map(x => this.userService.getUser(x.login).toPromise());
    Promise.all(users).then(u => {
      this.barChartData = [{ data: u.map(x => x.followers), label: 'Followers' }]
      this.barChartLabels = u.map(x => x.login)
    })
  }



}
