import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbStepChangeEvent } from '@nebular/theme';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styles: [
  ]
})
export class PaymentsPageComponent implements OnInit {

  linearMode = true;
  index!: number;

  data: any[] = [
    {
      id_institucion: 8,
      id_periodo: 3,
      id_pngrado: 173,
      id_compromiso: 1,
      compromiso_titulo: "Autorizacion menores",
      compromiso_descripcion: "Autorización para la publicación de imágenes de menores",
      compromiso_componente_ng: "publicacion-imagenes-menor",
      compromiso_id_corporacion: "2",
      orden: "1",
      requerido: "1",
      estado: "1"
    },
    {
      id_institucion: 8,
      id_periodo: 3,
      id_pngrado: 173,
      id_compromiso: 2,
      compromiso_titulo: "Autorizacion mayores",
      compromiso_descripcion: "Autorización para la publicación de imágenes de menores",
      compromiso_componente_ng: "publicacion-imagenes-menor",
      compromiso_id_corporacion: "2",
      orden: "1",
      requerido: "0",
      estado: "1"
    },
    {
      id_institucion: 8,
      id_periodo: 3,
      id_pngrado: 173,
      id_compromiso: 3,
      compromiso_titulo: "Autorizacion bebitas",
      compromiso_descripcion: "Autorización para la publicación de imágenes de menores",
      compromiso_componente_ng: "publicacion-imagenes-menor",
      compromiso_id_corporacion: "2",
      orden: "1",
      requerido: "1",
      estado: "1"
    },
  ];

  // tempdata: any[] = [];

  form: any = this.fb.group({
    items: this.fb.array([])
  });

  constructor(
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.setValues();
  }

  get items() {
    return this.form.get('items') as UntypedFormArray;
  }

  setValues() {
    this.data.map(({requerido, ...value}) => ({ 
      aceptado: [false, Number(requerido) === 1 ? [Validators.requiredTrue]: null], ...value}
    )).forEach(({compromiso_titulo, aceptado, id_compromiso}) => this.items.push(
      this.fb.group({ compromiso_titulo, aceptado, id_compromiso})
    ));
  }

  enviar() {
    const form = { id_alumno: 210122, id_periodo: 3, compromisos: this.items.value};
    console.log('form',form);

  }

  emitirChange(e: NbStepChangeEvent) {
    this.index = e.previouslySelectedIndex;
    console.log()
  }
}
