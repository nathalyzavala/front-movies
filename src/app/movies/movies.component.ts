import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Movies } from '../models/Movies';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  public results: Movies[] = [];
  closeResult = '';

  public movie: Movies;
  constructor(
    //private moviesService: MoviesService,
    private modalService: NgbModal
  ) {
    this.movie = new Movies("", "", "", 0, 0, 0, false, "", 0);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  openModalMovie(content: any) {
    this.open(content);
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getMovies() {
    /* this.moviesService.getMovies()
       .subscribe(
         (res: Movies[]) => {
           this.results = res;
         }
       );*/
  }

  onSubmit(form: NgForm) {
    console.log(this.movie);
  }

}
