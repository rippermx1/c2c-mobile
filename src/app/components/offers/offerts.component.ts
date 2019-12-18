import {Component, Input, OnInit} from '@angular/core';
import {IOffer} from '../../interfaces/offers/IOffer';

@Component({
  selector: 'app-offerts',
  templateUrl: './offerts.component.html',
  styleUrls: ['./offerts.component.scss'],
})
export class OffertsComponent implements OnInit {
  @Input() offers: IOffer[];
  constructor() { }

  ngOnInit() {}

}
