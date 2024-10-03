import {Entity, model, property} from '@loopback/repository';

@model()
export class Formulario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  message?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;


  constructor(data?: Partial<Formulario>) {
    super(data);
  }
}

export interface FormularioRelations {
  // describe navigational properties here
}

export type FormularioWithRelations = Formulario & FormularioRelations;
