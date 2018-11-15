import { Component, OnInit } from '@angular/core';
import { WorkItem } from 'src/app/models/work-item';
import { StarWarService } from 'src/app/services/star-war.service';
import { Film } from 'src/app/models/film';


@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements OnInit {

  films: Film[];

  constructor(private _starService: StarWarService) { }

  ngOnInit() {
    this.films = this.getFilms();
  }

  getFilms(): Film[] {
    this._starService.getFilms().subscribe(result => {
      if (result) {
        this.films = result.results.sort((a, b) => (a.episode_id - b.episode_id));
      }
    });
    return [];
  }
}
