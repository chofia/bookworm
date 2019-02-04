import { Response } from '@angular/http';
import { BookwormService } from '../services/bookworm.services';
import BookWorm from '../models/bookworm.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookworm',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    
    private bookwormService: BookwormService
  ) { }

  public newBookworm: BookWorm = new BookWorm()

  bookwormsList: BookWorm[];
  editBookworms: BookWorm[] = [];

  ngOnInit(): void {

    this.bookwormService.getBookWorms()
      .subscribe(bookworms => {
        
        this.bookwormsList = bookworms
        console.log(bookworms)
      })
  }
  
  create() {
    this.bookwormService.createBookworm(this.newBookworm)
      .subscribe((res) => {
        this.bookwormsList.push(res.data)
        this.newBookworm = new BookWorm()
      })
  }

  
}