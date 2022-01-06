import { Component, OnInit } from '@angular/core';
declare let $: any ;

@Component({
  selector: 'app-modal-jauery',
  templateUrl: './modal-jauery.component.html',
  styleUrls: ['./modal-jauery.component.css']
})
export class ModalJaueryComponent implements OnInit {

  ngOnInit()
  {
    $('h1').addClass('testclass');
  } 
  SetBucketReq()
  {
  }
  ShowBucketModelPopup() {
    $('#provider_model').modal('show');
}
closeBucketModelPopup() {
  $('#provider_model').modal('hide');
}
}
