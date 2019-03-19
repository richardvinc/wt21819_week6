import { Injectable } from "@angular/core";
import { Student } from "./student";

@Injectable({
  providedIn: "root"
})
export class DataService {
  students: Array<Student> = [
    {
      nim: 12345,
      nama: "elizabeth wong",
      prodi: "sistem informasi",
      ipk: 3.5,
      matkul: ["algoritma dan pemrograman", "rekayasa piranti lunak", "business intelligence"],
      img: "http://lorempixel.com/640/480/people/1"
    },
    {
      nim: 23456,
      nama: "popo fernandes",
      prodi: "teknik industri",
      ipk: 3.9,
      matkul: ["stokiometri bahan", "fisika dasar", "elektronika terapan"],
      img: "http://lorempixel.com/640/480/people/2"
    },
    {
      nim: 34567,
      nama: "alexander chow",
      prodi: "akuntansi",
      ipk: 2.1,
      matkul: ["ekonomi mikro", "akuntansi keuangan dasar"],
      img: "http://lorempixel.com/640/480/people/3"
    },
    {
      nim: 45678,
      nama: "john smith",
      prodi: "manajemen",
      ipk: 3.0,
      matkul: ["manajemen SDM"],
      img: "http://lorempixel.com/640/480/people/4"
    }
  ];

  constructor() {}

  getStudents(): Array<Student> {
    return this.students;
  }

  getStudent(nim: number): Array<Student> {
    // this.students.forEach(student => {
    //   if (student.nim == nim) return student;
    // });

    //return null;

    return this.students.filter(student => {
      return student.nim === nim;
    });
  }
}
