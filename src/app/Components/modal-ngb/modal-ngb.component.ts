import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-ngb',
  templateUrl: './modal-ngb.component.html',
  styleUrls: ['./modal-ngb.component.css']
})
export class ModalNGBComponent implements OnInit {
  closeResult = '';
  users!:users
  constructor(private modalService: NgbModal) {
    this.users=new users();
  }
  ngOnInit(): void {
    
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    } else  {
      return `with: ${reason}`;
    }
  }

  OnSubmitForm()
  {   
    console.warn(this.users)
  }
}

  export class users{
    user_id:any;
    email:any;
    password:any
  }
