import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  url = "https://pokeapi.co/api/v2/pokemon/";
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(this.url);
  }

  getPokemon(name) {
    return this.http.get(this.url + name);
  }
}
