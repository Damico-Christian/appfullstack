import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root',
})
export class FlaskService {
constructor(private http: HttpClient) {}
getProfilo() {
return this.http.get('https://super-waddle-97695g7g959v34wq-5000.app.github.dev/profilo');
}
}