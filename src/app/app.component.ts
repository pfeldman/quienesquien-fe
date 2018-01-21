import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from '../models/question.model'
import {Category} from "../models/category.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  questions:Array<Question> = [];
  categories:Array<Category> = [];
  id:number;
  text:string;
  file:number;
  column: number;
  selecteds:object = {};
  empties:object = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const gameService:GameService = new GameService(this.http);
    gameService.get().then(data => {
      this.id = data.id;
      this.text = data.text;
      this.questions = data.questions;
      this.categories = data.categories;
    });
  }

  toggleActive(row:number, col:number):void {
    if (!this.selecteds[row]) this.selecteds[row] = {};
    if (this.selecteds[row][col]) {
      this.selecteds[row][col] = !this.selecteds[row][col]
    } else {
      this.selecteds[row][col] = true;
    }
  }

  toggleUnActive(row:number, col:number):void {
    if (!this.empties[row]) this.empties[row] = {};
    if (this.empties[row][col]) {
      this.empties[row][col] = !this.empties[row][col]
    } else {
      this.empties[row][col] = true;
    }
  }

  moveOverCell(row:number, col:number):void {
    this.file = row;
    this.column = col;
  }
}
