import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    { titulo: 'Angular', creador: 'Fernando', fechaCreacion: new Date(), texto: 'Framework para crear SPA'},
    { titulo: 'React', creador: 'Miguel', fechaCreacion: new Date(), texto: 'Libreria para crear SPA'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
