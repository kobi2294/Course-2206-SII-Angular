import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies$!: Promise<string[]>;

  constructor(
    private dataService: DataService, 
    private router: Router) { }

  ngOnInit(): void {
    this.movies$ = this.dataService.getMovieCaptions();
  }

  onMovieSelect(index: number) {
    this.router.navigate(['movies', index]);
  }

}
