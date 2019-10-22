import { Injectable } from '@angular/core';
import { Product } from './product';
import { Album } from './album';
//import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { catchError, tap, map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  private _productsUrl = '../assets/products.json';
  private _albumUrl = '../assets/album.json';
  constructor(private _http : Http) { }

  getProducts() : Observable<Product[]> {
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
  }

  getAlbum(id:number) : Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }


}
