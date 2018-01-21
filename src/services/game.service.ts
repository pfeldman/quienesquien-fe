import {HttpClient} from '@angular/common/http';
import {AppComponent} from "../app/app.component";

export class GameService {
  constructor(private http: HttpClient) {}

  public get():Promise<any> {
    return new Promise(resolve => {
      this.http.get('https://pfeldmangame.herokuapp.com/game')
        .subscribe(data => resolve(data))
    });
  }
}
