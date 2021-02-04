import { Component, OnInit } from '@angular/core';
import { ApiResponseDto } from 'src/app/dtos/api-response-dto';
import { OfferDto } from 'src/app/dtos/offer-dto';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: OfferDto[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.obtenerOfertas();
  }

  obtenerOfertas() {
    this.offersService.getOffers()
      .subscribe((response: ApiResponseDto<OfferDto[]>) => {
        this.offers = response.DATA
        console.log(this.offers);
      }, err => {
        this.offers = [];
        alert('hubo un error');
      });
  }

}
