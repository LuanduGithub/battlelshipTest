import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardDataService {
  public boardHeader = [{
    'letter': 'a'
  }, {
    'letter': 'b'
  }, {
    'letter': 'c'
  }, {
    'letter': 'd'
  }, {
    'letter': 'e'
  }, {
    'letter': 'f'
  }, {
    'letter': 'g'
  }, {
    'letter': 'h'
  }, {
    'letter': 'i'
  }, {
    'letter': 'j'
  }];
  public boardBody = [
    {
      line: [
        { 'class': 'water', 'number': 1 },
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 1, 'sunk': false, 'damaged': false, 'missed': false}
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 2 },
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false},
        { 'class': 'water', 'row': 2, 'sunk': false, 'damaged': false, 'missed': false}
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 3 },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 3, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 4 },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 4, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 5 },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 5, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 6 },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 6, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 7 },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 7, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 8 },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 8, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 9 },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 9, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    },
    {
      line: [
        { 'class': 'water', 'number': 10 },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false },
        { 'class': 'water', 'row': 10, 'sunk': false, 'damaged': false, 'missed': false }
      ]
    }
  ];
  constructor() { }
}
