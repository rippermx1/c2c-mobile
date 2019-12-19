import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {INavbar} from '../../interfaces/navbar/INavbar';
import {isNullOrUndefined} from 'util';
import {IOffer} from '../../interfaces/offers/IOffer';
import {OfferService} from '../../services/offers/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  /**
   * Navbar object
   */
  navbar: INavbar = {
    url: '/home',
    icon: 'home',
    searchBar: false,
    title: 'Ofertas'
  };
  /**
   * Represent the offer id in the url
   */
  offerId: number;
  offerSelected: IOffer;
  constructor(private activatedRoute: ActivatedRoute,
              private offerService: OfferService) { }

  ngOnInit() {
    this.offerId = this.getUrlParameterValue('id');
    this.offerSelected = this.offerService.getOffer(this.offerId);
  }

  /**
   * TODO: Remember, move this function to a application service
   * Return the parameter value in the URL
   * @param key represents the URL parameter name
   */
  getUrlParameterValue(key: any) {
    const params: any = this.activatedRoute.snapshot.params;
    if (isNullOrUndefined(params[key])) {
      return NaN;
    }
    return params[key];
  }

}
