import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"]
})
export class Page1Component implements OnInit {
  pokemons = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.students = this.dataService.getStudents();
    this.dataService.getPokemons().subscribe(data => {
      console.log(data);
      this.pokemons = data["results"];
    });
  }
}

//https://pokeapi.co/api/v2/pokemon
