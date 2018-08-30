/// bug: Exist the possibility of the ships were being overlapped.

import { Component, OnInit } from '@angular/core';

import { BoardDataService } from '../services/board-data.service';

import { GameConfigurationService } from './../services/game-configuration.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  boardHeaders: any;
  boarBodys: any;
  ships: any[] = [];
  shipsSunks: any[] = [];
  shipsVTwo: any[] = [];
  shipsHTwo: any[] = [];
  oneBlockShipName: string;
  twoBlockShipName: string;
  shotsAmount: number;
  difficulty: string;

  oneBlockShipX: number;
  oneBlockShipY: number;
  twoBlockShipVHits: number;
  twoBlockShipV1: number;
  twoBlockShipV2: number;
  twoBlockShipY1: number;

  boomX: any;
  boomY: any;
  sink = false;
  missed = false;
  sunk = false;
  message: string;
  buttonMessage: string;
  shots = 0;
  hitsTwo = 0;
  shipHits3H = 0;
  shipHits3V = 0;
  shipHits4V = 0;

  shipPos1: number;
  shipPos2: number;
  shipPos3: number;
  shipPos4: number;
  shipPos5: number;
  shipPos6: number;
  shipName: string;
  shipHits: number;

  oneBlockShip1: any;
  oneBlockShip2: any;
  oneBlockShip3: any;
  oneBlockShip4: any;

  twoBlockShip1: any;
  twoBlockShip2: any;
  twoBlockShipH: any;

  treeBlockShipH: any;
  treeBlockShipV: any;

  fourBlockShip: any;

  constructor(
    private boardDataService: BoardDataService,
    private gameConfigurationService: GameConfigurationService
  ) {}

  ngOnInit() {
    this.boardHeaders = this.boardDataService.boardHeader;
    this.boarBodys = this.boardDataService.boardBody;
    this.difficulty = this.gameConfigurationService.getDifficulty();
    this.setDiffilculty();
    this.oneBlockShip1 = new this.oneBlockShip(
      'SS Alice Clair',
      this.setVal(),
      this.setVal()
    );
    this.oneBlockShip2 = new this.oneBlockShip(
      'Benegal Star',
      this.setVal(),
      this.setVal()
    );
    this.oneBlockShip3 = new this.oneBlockShip(
      'Colonia',
      this.setVal(),
      this.setVal()
    );
    this.oneBlockShip4 = new this.oneBlockShip(
      'Dundee Castle',
      this.setVal(),
      this.setVal()
    );
    const tbs1Val = this.setVal();
    this.twoBlockShip1 = new this.twoBlockShipVertical(
      'HMS Seafret',
      0,
      this.setVal(),
      tbs1Val,
      tbs1Val + 1
    );
    const tbs2Val = this.setVal();
    this.twoBlockShip2 = new this.twoBlockShipVertical(
      'Queen of Olati',
      0,
      this.setVal(),
      tbs2Val,
      tbs2Val + 1
    );
    const tbshVal = this.setVal();
    this.twoBlockShipH = new this.twoBlockShipHorizontal(
      'Super 99',
      0,
      this.setVal(),
      tbshVal,
      tbshVal + 1
    );

    const treebsvVal = this.setVal();
    this.treeBlockShipV = new this.treeBlockShipVertical(
      'Sweet Madonna',
      0,
      this.setVal(),
      treebsvVal,
      treebsvVal + 1,
      treebsvVal - 1
    );
    console.log(this.treeBlockShipV);

    const fourbsvVal = this.setVal();
    this.fourBlockShip = new this.fourBlockShipVertical(
      'Sweet Madonna',
      0,
      this.setVal(),
      fourbsvVal,
      fourbsvVal + 1,
      fourbsvVal - 1,
      fourbsvVal - 2
    );
    console.log(this.fourBlockShip);

    const treebsHVal = this.setVal();
    this.treeBlockShipH = new this.treeBlockShipHorizontal(
      'Tempest Junior',
      0,
      this.setVal(),
      treebsHVal,
      treebsHVal + 1,
      treebsHVal - 1
    );
    console.log(this.treeBlockShipH);

    this.ships.push(this.oneBlockShip1);
    this.ships.push(this.oneBlockShip2);
    this.ships.push(this.oneBlockShip3);
    this.ships.push(this.oneBlockShip4);

    this.shipsVTwo.push(this.twoBlockShip1);
    this.shipsVTwo.push(this.twoBlockShip2);
    this.shipsHTwo.push(this.twoBlockShipH);

    console.log(this.ships);
    console.log(this.shipsVTwo);
    console.log(this.shipsHTwo);
  }

  setVal() {
    let val = Math.floor(Math.random() * 10 + 1);
    if (val === 0) {
      val = val + 1;
    }
    if (val === 10) {
      val = val - 1;
    }
    return val;
  }
  setDiffilculty() {
    switch (this.difficulty) {
      case 'easy':
        this.shotsAmount = 100;
        break;
      case 'medium':
        this.shotsAmount = 75;
        break;
      case 'hard':
        this.shotsAmount = 50;
        break;
      default:
        this.shotsAmount = 100;
        break;
    }
  }
  getCell(cel, index) {
    this.shots++;
    if (this.shots >= this.shotsAmount) {
      this.showMessage('finish', 'No more shots ', 'OK');
      for (let i = 0; i < this.boarBodys.length; i++) {
        for (let j = 0; j < this.boarBodys[i].line.length; j++) {
          this.boarBodys[i].line[j].missed = true;
        }
      }
    }
    this.boomX = cel.row;
    this.boomY = index;
    this.getOnblockShip(cel);
    this.getTwoBlockShipHorizontal(cel);
    this.getTwoBlockShipVertical(cel);
    this.getTreeBlockShipHorizontal(cel);
    this.getTreeBlockShipVertical(cel);
  }

  getOnblockShip(cel) {
    for (let i = 0; i < this.ships.length; i++) {
      if (
        this.boomX === this.ships[i].shipPos1 &&
        this.boomY === this.ships[i].shipPos2
      ) {
        cel.sunk = true;
        cel.missed = false;
        this.shipsSunks.push(this.ships[i].shipName);
        this.showMessage(
          'sunk',
          'You have Sunk ' + this.ships[i].shipName,
          'Great!!'
        );
        return;
      }
      if (
        this.boomX !== this.ships[i].shipPos1 &&
        this.boomY !== this.ships[i].shipPos2
      ) {
        cel.missed = true;
        cel.sunk = false;
      }
    }
  }
  getTwoBlockShipHorizontal(cel) {
    for (let i = 0; i < this.shipsHTwo.length; i++) {
      if (
        (this.boomX === this.shipsHTwo[i].shipPos1 &&
          this.boomY === this.shipsHTwo[i].shipPos3) ||
        (this.boomX === this.shipsHTwo[i].shipPos1 &&
          this.boomY === this.shipsHTwo[i].shipPos2)
      ) {
        cel.sunk = true;
        cel.missed = false;
        if (this.shipsHTwo[i].twoBlockShipVHits === 0) {
          this.shipsHTwo[i].twoBlockShipVHits = 1;
          return;
        }
        if (this.shipsHTwo[i].twoBlockShipVHits === 1) {
          this.shipsSunks.push(this.shipsHTwo[i].shipName);
          this.showMessage(
            'sunk',
            'You have Sunk ' + this.shipsHTwo[i].shipName,
            'Great!!'
          );
          return;
        }
        return;
      }
    }
  }

  getTwoBlockShipVertical(cel) {
    for (let i = 0; i < this.shipsVTwo.length; i++) {
      if (
        (this.boomX === this.shipsVTwo[i].shipPos1 &&
          this.boomY === this.shipsVTwo[i].shipPos3) ||
        (this.boomX === this.shipsVTwo[i].shipPos2 &&
          this.boomY === this.shipsVTwo[i].shipPos3)
      ) {
        cel.sunk = true;
        cel.missed = false;
        if (this.shipsVTwo[i].shipHits === 0) {
          this.shipsVTwo[i].shipHits = 1;
          return;
        }
        if (this.shipsVTwo[i].shipHits === 1) {
          this.shipsSunks.push(this.shipsVTwo[i].shipName);
          this.showMessage(
            'sunk',
            'You have Sunk ' + this.shipsVTwo[i].shipName,
            'Great!!'
          );
          return;
        }
        return;
      }
    }
  }

  getTreeBlockShipHorizontal(cel) {
    if (
      (this.boomX === this.treeBlockShipH.shipPos1 &&
        this.boomY === this.treeBlockShipH.shipPos2) ||
      ((this.boomX === this.treeBlockShipH.shipPos1 &&
        this.boomY === this.treeBlockShipH.shipPos3) ||
        (this.boomX === this.treeBlockShipH.shipPos1 &&
          this.boomY === this.treeBlockShipH.shipPos4))
    ) {
      cel.sunk = true;
      cel.missed = false;
      this.shipHits3H++;
      this.treeBlockShipH.shipHits = this.shipHits3H;
      if (this.treeBlockShipH.shipHits === 3) {
        this.shipsSunks.push(this.treeBlockShipH.shipName);
        this.showMessage(
          'sunk',
          'You have Sunk ' + this.treeBlockShipH.shipName,
          'Great!!'
        );
      }
    }
  }
  getTreeBlockShipVertical(cel) {
    if (
      (this.boomX === this.treeBlockShipV.shipPos2 &&
        this.boomY === this.treeBlockShipV.shipPos1) ||
      ((this.boomX === this.treeBlockShipV.shipPos3 &&
        this.boomY === this.treeBlockShipV.shipPos1) ||
        (this.boomX === this.treeBlockShipV.shipPos4 &&
          this.boomY === this.treeBlockShipV.shipPos1))
    ) {
      cel.sunk = true;
      cel.missed = false;
      this.shipHits3V++;
      this.treeBlockShipV.shipHits = this.shipHits3V;
      if (this.treeBlockShipV.shipHits === 3) {
        this.shipsSunks.push(this.treeBlockShipV.shipName);
        this.showMessage(
          'sunk',
          'You have Sunk ' + this.treeBlockShipV.shipName,
          'Great!!'
        );
      }
    }
  }

  getFourBlockShipVertical(cel) {
    if (
      (this.boomX === this.treeBlockShipV.shipPos2 &&
        this.boomY === this.treeBlockShipV.shipPos1) ||
      ((this.boomX === this.treeBlockShipV.shipPos3 &&
        this.boomY === this.treeBlockShipV.shipPos1) ||
        (this.boomX === this.treeBlockShipV.shipPos4 &&
          this.boomY === this.treeBlockShipV.shipPos1) ||
        (this.boomX === this.treeBlockShipV.shipPos5 &&
          this.boomY === this.treeBlockShipV.shipPos1))
    ) {
      cel.sunk = true;
      cel.missed = false;
      this.shipHits4V++;
      this.treeBlockShipV.shipHits = this.shipHits4V;
      if (this.treeBlockShipV.shipHits === 4) {
        this.shipsSunks.push(this.treeBlockShipV.shipName);
        this.showMessage(
          'sunk',
          'You have Sunk ' + this.treeBlockShipV.shipName,
          'Great!!'
        );
      }
    }
  }

  showMessage(type, message, buttonMessage) {
    if (type === 'sunk' || type === 'finish') {
      this.sunk = true;
    }
    this.message = message;
    this.buttonMessage = buttonMessage;
  }
  oneBlockShip(name, x, y) {
    this.shipPos1 = x;
    this.shipPos2 = y;
    this.shipName = name;
  }
  twoBlockShipVertical(name, hits, y, x1, x2) {
    this.shipHits = hits;
    this.shipPos1 = x1;
    this.shipPos2 = x2;
    this.shipPos3 = y;
    this.shipName = name;
  }
  twoBlockShipHorizontal(name, hits, y, x1, x2) {
    this.shipHits = hits;
    this.shipPos1 = y;
    this.shipPos2 = x2;
    this.shipPos3 = x1;
    this.shipName = name;
  }
  treeBlockShipHorizontal(name, hits, y, x1, x2, x3) {
    this.shipHits = hits;
    this.shipPos1 = y;
    this.shipPos2 = x1;
    this.shipPos3 = x2;
    this.shipPos4 = x3;
    this.shipName = name;
  }
  treeBlockShipVertical(name, hits, x, y1, y2, y3) {
    this.shipHits = hits;
    this.shipPos1 = x;
    this.shipPos2 = y1;
    this.shipPos3 = y2;
    this.shipPos4 = y3;
    this.shipName = name;
  }
  fourBlockShipVertical(name, hits, x, y1, y2, y3, y4) {
    this.shipHits = hits;
    this.shipPos1 = x;
    this.shipPos2 = y1;
    this.shipPos3 = y2;
    this.shipPos4 = y3;
    this.shipPos5 = y4;
    this.shipName = name;
  }
}
