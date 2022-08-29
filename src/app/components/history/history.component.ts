import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  modalRef?: BsModalRef;
  testJson =
    '<p>The first written record of distilling is found. Ancient Greek philosopher<a href="javascript:void(0)" (click)="openModal(alexanderOfAphrodisias)">Alexander of Aphrodisias</a>describes the process of taking sea water and distilling it into pure drinking water. Medieval civilizations evolved their techniques over the following centuries, although still not resulting in alcohol.</p>';
  safeHtml: SafeHtml;

  constructor(private modalService: BsModalService, public dom: DomSanitizer) {
    this.safeHtml = dom.bypassSecurityTrustHtml(this.testJson);
  }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
