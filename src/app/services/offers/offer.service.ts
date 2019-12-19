import { Injectable } from '@angular/core';
import {IOffer} from '../../interfaces/offers/IOffer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  /**
   * Example offer array
   */
  offers: IOffer[] = [
    {
      id: 1,
      img: 'https://picsum.photos/400/100',
      url: '/offers',
      title: 'Navidad con 20% de descuento',
      description: 'Por compras mayores a 10 unidades se aplica un descuento del 20% sobre el total.'
    },
    {
      id: 2,
      img: 'https://picsum.photos/400/100',
      url: '/offers',
      title: 'Navidad con 20% de descuento',
      description: 'Por compras mayores a 10 unidades se aplica un descuento del 20% sobre el total.'
    },
    {
      id: 3,
      img: 'https://picsum.photos/400/100',
      url: '/offers',
      title: 'Navidad con 20% de descuento',
      description: 'Por compras mayores a 10 unidades se aplica un descuento del 20% sobre el total.'
    }
  ];
  constructor() { }

  /**
   * Return all offers
   */
  getOffers() {
    return this.offers;
  }

  /**
   * Return an offer by id
   * @param id the offer id
   */
  getOffer(id: number): IOffer {
    return this.offers.find(o => o.id == id);
  }
}
