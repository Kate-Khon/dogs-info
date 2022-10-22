import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface data {
  message: string[],
  status: string
}

interface pictureData {
  message: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})

export class DogsService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<data> {
    return this.http.get<data>('https://dog.ceo/api/breeds/list')
  }

  getPicture(selectedDog: string): Observable<pictureData> {
    return this.http.get<pictureData>(`https://dog.ceo/api/breed/${selectedDog}/images/random`)
  }
}
