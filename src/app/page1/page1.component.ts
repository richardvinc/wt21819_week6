import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Student } from "../student";
@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"]
})
export class Page1Component implements OnInit {
  students: Array<Student> = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.students = this.dataService.getStudents();
  }
}
