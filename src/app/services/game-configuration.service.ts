import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameConfigurationService {
  private difficulty: string;

  constructor() {}

  getDifficulty() {
    return this.difficulty;
  }

  setDifficulty(difficulty: string) {
    this.difficulty = difficulty;
  }
}
