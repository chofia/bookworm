import { Response } from '@angular/http';
import { BookwormService } from '../services/bookworm.services';
import BookWorm from '../models/bookworm.models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bookworm',
  templateUrl: './bookworm.component.html',
  styleUrls: ['./bookworm.component.scss']
})
export class BookwormComponent implements OnInit {

  constructor(private bookwormService: BookwormService) { }

  //Declaring the new bookworm Object and initilizing it
  newBookworm: BookWorm = new BookWorm();

  //An Empty list for the visible BookWorm list
  bookwormsList: BookWorm[];
  editBookworms: BookWorm[] = [];

  ngOnInit() {
    //At component initialization the 
    this.bookwormService.getBookWorms()
      .subscribe(bookworms => {
        //assign the bookwormlist property to the proper http response
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

  editBookworm(bookworm: BookWorm) {
    console.log(bookworm)
     if(this.bookwormsList.includes(bookworm)){
      if(!this.editBookworms.includes(bookworm)){
        this.editBookworms.push(bookworm)
      }else{
        this.editBookworms.splice(this.editBookworms.indexOf(bookworm), 1)
        this.bookwormService.editBookworm(bookworm).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            this.editBookworm(bookworm)
            console.error('Update Unsuccesful')
          })
        }
      }
    }

    doneBookworm(bookworm:BookWorm){
      bookworm.status = 'Done'
      this.bookwormService.editBookworm(bookworm).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        this.editBookworm(bookworm)
        console.error('Update Unsuccesful')
      })
    }

    submitBookworm(event, bookworm:BookWorm){
      if(event.keyCode ==13){
        this.editBookworm(bookworm)
      }
    }

    deleteBookworm(bookworm: BookWorm) {
      this.bookwormService.deleteBookworm(bookworm._id).subscribe(res => {
        this.bookwormsList.splice(this.bookwormsList.indexOf(bookworm), 1);
      })
    }

}