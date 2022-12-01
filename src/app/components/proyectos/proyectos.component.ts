import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectos = [
    {nombre:"Weather", descripcion:"Aplicación web de clima utilizando la API OpenWeather", img:"../assets/img/app_clima.PNG", tecnologias:["fa-brands fa-html5 icon", "fa-brands fa-css3 icon","fa-brands fa-js icon"], github: "https://github.com/javierf39/weatherJS", web:'https://javierfreire-clima.netlify.app'},
    {nombre:"Animes", descripcion:"Aplicación web utilizando Jikan API.", img:"../assets/img/app_anime.PNG", tecnologias:["fa-brands fa-html5 icon","fa-brands fa-css3 icon","fa-brands fa-angular icon"],github:"https://github.com/javierf39/apiAnimeAngular",web:'https://animes-jf.netlify.app'},
    {nombre:"Películas", descripcion:"Aplicación web, basada en un CRUD, con desarrollo de FronEnd y BackEnd.", img:"../assets/img/pelicula.PNG",tecnologias:["fa-brands fa-html5 icon","fa-brands fa-css3 icon","fa-brands fa-angular icon", "fa-brands fa-node-js icon"], github:"https://github.com/javierf39/peliculasAngular", web:null},
    {nombre:"Tienda", descripcion:"Tienda online, consume los datos de la API dummyJSON", img:"../assets/img/tienda.PNG", tecnologias:["fa-brands fa-html5 icon","fa-brands fa-sass icon","fa-brands fa-angular icon"], github:"https://github.com/javierf39/tienda_angular", web:"https://tienda-jf.netlify.app"},
    {nombre:"Mundo Patitas", descripcion:"Aplicación web para gestionar horas medicas en clínicas veterinarias", img:"../assets/img/mundoPatitas.PNG", tecnologias:["fa-brands fa-html5 icon","fa-brands fa-css3 icon","fa-brands fa-js icon","fa-brands fa-node-js icon","fa-brands fa-python icon"], github:"https://github.com/javierf39/MundoPatitas",web:null},
    {nombre:"Hubclean", descripcion:"Web desarrollado para una empresa de limpieza", img:"../assets/img/hubclean.png", tecnologias:["fa-brands fa-html5 icon","fa-brands fa-sass icon","fa-brands fa-angular icon", "fa-brands fa-node-js icon"], github:"https://github.com/javierf39/hubclean",web:"https://hubclean.cl/"},
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
