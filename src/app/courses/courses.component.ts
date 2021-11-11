import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrayCursos = [
    {
      id: "0000",
      nombre: "curso 1",
      banner: "",
      estado: "abierto"
    },
        {
      id: "0001",
      nombre: "curso 2",
      banner: "",
      estado: "cerrado"
    },    {
      id: "0002",
      nombre: "curso 3",
      banner: "",
      estado: "abierto"
    },    {
      id: "0003",
      nombre: "curso 4",
      banner: "",
      estado: "finalizado"
    },
  ]

}
