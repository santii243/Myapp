import { Injectable } from '@angular/core';
import { OfferDto } from '../dtos/offer-dto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ApiResponseDto } from '../dtos/api-response-dto';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(): Observable<ApiResponseDto<OfferDto[]>> {
    return this.http.get<ApiResponseDto<OfferDto[]>>("http://localhost:8000/api/offers")
      .pipe(
        tap(offers => console.log('hemos recuperado ofertas')),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
