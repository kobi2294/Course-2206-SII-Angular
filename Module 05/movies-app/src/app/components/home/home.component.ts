import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count$!: Promise<number>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.count$ = this.dataService.getMoviesCount();
  }

}
