import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from "../student";
import { DataService } from "../data.service";

@Component({
  selector: "app-page2",
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.css"]
})
export class Page2Component implements OnInit {
  //buat penampung untuk parameter
  nim: number = null;
  student: Student = null;

  //terima paramater yang dioper
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    //telusuri semua parameter yang diberikan
    this.route.paramMap.subscribe(element => {
      //cari apakah ada parameter yang namanya "nim"
      this.nim = +element.get("nim"); //convert string to number
      console.log(this.nim);

      this.student = this.dataService.getStudent(this.nim);
    });
  }
}
