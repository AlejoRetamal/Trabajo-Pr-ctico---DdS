import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Editorial {
  id: number;
  nombre: string;
  direccion: string;
  imagen: string;

}

@Injectable({
  providedIn: 'root',
})
export class EditorialesService {
  /*private editoriales: Editorial[] = [
    {
      id: 1,
      nombre: 'Editorial BOOKRACK',
      direccion: 'Direccion 1', 
      imagen: '../../../../assets/img/Editoriales/editorial-bookrack.webp',
    },

    {
      id: 2,
      nombre: 'Editorial DJaen',
      direccion: 'Direccion 2',
      imagen: '../../../../assets/img/Editoriales/editorial-djaen.webp',
    },

    {
      id: 3,
      nombre: 'Editorial Gato Malo',
      direccion: 'Direccion 3',
      imagen: '../../../../assets/img/Editoriales/editorial-gato-malo.webp',
    },

    {
      id: 4,
      nombre: 'Editorial Tierra de Mu',
      direccion: 'Direccion 4',
      imagen: '../../../../assets/img/Editoriales/editorial-tierra-de-mu.webp',
    },

    {
      id: 5,
      nombre: 'Editorial Vealia',
      direccion: 'Direccion 5',
      imagen: '../../../../assets/img/Editoriales/editorial-vealia.webp',
    },
  ];
  constructor() {}

  getEditoriales(): Editorial[] {
    return this.editoriales;
  }*/


  private apiUrl = 'http://localhost:3000/api/editoriales';

  constructor(private http: HttpClient) {}

   getEditoriales() {
    console.log("data");
    return this.http.get(this.apiUrl);
  }

  /*constructor() {}

  async getEditoriales() {
    try {
      const response = await fetch('http://localhost:3000/api/editoriales');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }*/
}
  
  


