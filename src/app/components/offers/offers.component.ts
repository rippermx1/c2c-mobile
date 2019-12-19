import {Component, Input, OnInit} from '@angular/core';
import {IOffer} from '../../interfaces/offers/IOffer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  @Input() offers: IOffer[];
  constructor() { }

  ngOnInit() {}

}
