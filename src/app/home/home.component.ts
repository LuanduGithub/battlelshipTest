import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GameConfigurationService } from './../services/game-configuration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  easy: boolean;
  medium: boolean;
  hard: boolean;
  constructor(
    private router: Router,
    private gameConfigurationService: GameConfigurationService
  ) {}

  ngOnInit() {}
  gotoBoard() {
    this.router.navigate(['board']);
  }
  setDifficulty(level) {
    this.gameConfigurationService.setDifficulty(level);
    switch (level) {
      case 'easy':
        this.easy = true;
        this.medium = false;
        this.hard = false;
        break;
      case 'medium':
        this.easy = false;
        this.medium = true;
        this.hard = false;
        break;
      case 'hard':
        this.easy = false;
        this.medium = false;
        this.hard = true;
        break;
    }
  }
}
