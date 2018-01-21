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

  moveOverCell(row:number, col:number):void {
    console.log(row, col)
  }
}
