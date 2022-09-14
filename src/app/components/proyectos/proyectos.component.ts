import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos = [
    {nombre:"Weather", descripcion:"Está aplicación entrega información sobre el clima, tanto de la ubicación del dispositivo como de la ciudad que sea introducida en el buscador. La api utilizada para el desarrollo de está fue WeatherStack.", img:"../assets/img/weather.PNG", tecnologias:["fa-brands fa-html5 icon", "fa-brands fa-css3 icon","fa-brands fa-js icon"], github: "https://github.com/javierf39/weatherJS"},
    {nombre:"Animes", descripcion:"Está aplicación proporciona información sobre animes, para ello el usuario debe introducir el nombre de un anime en el buscardor y la aplicación entregará su información. La api utilizada para esta aplicación fue Jikan API.", img:"../assets/img/animeAngular.PNG", tecnologias:["fa-brands fa-html5 icon","fa-brands fa-css3 icon","fa-brands fa-angular icon"],github:"https://github.com/javierf39/apiAnimeAngular"},
    {nombre:"Películas", descripcion:"Aplicación basada en un CRUD para almacener tus películas favoritas. En este proyecto también desarrolé una API rest para la manipulación de la información, en formato JSON, a traves del FRONT-END y BACK-END.", img:"../assets/img/pelicula.PNG",tecnologias:["fa-brands fa-html5 icon","fa-brands fa-css3 icon","fa-brands fa-angular icon", "fa-brands fa-node-js icon"], github:"https://github.com/javierf39/peliculasAngular"},
    {nombre:"Mundo Patitas", descripcion:"Aplicación desarrollada en entorno académico, especificamente como proyecto de título. Funciona como un sistema de gestión de horas veterinas, donde los dueños de mascotas pueden buscar a su veteriano mas conveniente y solicitar una hora con él.", img:"../assets/img/mundoPatitas.PNG", tecnologias:["fa-brands fa-html5 icon","fa-brands fa-css3 icon","fa-brands fa-js icon","fa-brands fa-node-js icon","fa-brands fa-python icon"], github:"https://github.com/javierf39/MundoPatitas"},
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
