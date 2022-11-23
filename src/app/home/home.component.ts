import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomPhoto:any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRandomPhoto().subscribe((data)=>{
      this.randomPhoto = data;
    });
  }

}
