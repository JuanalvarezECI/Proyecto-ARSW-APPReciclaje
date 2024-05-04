import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  rewards: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getRewardsWithMinQuantity().subscribe((response: any) => {
      this.rewards = response.data.filter((reward: { unit: number; }) => reward.unit > 0);
    });
  }
}