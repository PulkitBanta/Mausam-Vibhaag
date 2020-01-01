import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HindiWeatherService {

  constructor(private http: HttpClient) { }

  toHindi(name) {
    return this.http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191231T130646Z.e62521372c7a769f.f91db21c1344cf3fc647b34f777cc1d2a2ec95ef&text=" + name + "&lang=en-hi")
  }

}
