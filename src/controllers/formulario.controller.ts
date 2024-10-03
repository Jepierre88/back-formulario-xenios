import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Formulario} from '../models';
import {FormularioRepository} from '../repositories';

export class FormularioController {
  constructor(
    @repository(FormularioRepository)
    public formularioRepository : FormularioRepository,
  ) {}

  @post('/formularios')
  @response(200, {
    description: 'Formulario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Formulario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formulario, {
            title: 'NewFormulario',
            exclude: ['id'],
          }),
        },
      },
    })
    formulario: Omit<Formulario, 'id'>,
  ): Promise<Formulario> {
    return this.formularioRepository.create(formulario);
  }

  @get('/formularios/count')
  @response(200, {
    description: 'Formulario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Formulario) where?: Where<Formulario>,
  ): Promise<Count> {
    return this.formularioRepository.count(where);
  }

  @get('/formularios')
  @response(200, {
    description: 'Array of Formulario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Formulario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Formulario) filter?: Filter<Formulario>,
  ): Promise<Formulario[]> {
    return this.formularioRepository.find(filter);
  }

  @patch('/formularios')
  @response(200, {
    description: 'Formulario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formulario, {partial: true}),
        },
      },
    })
    formulario: Formulario,
    @param.where(Formulario) where?: Where<Formulario>,
  ): Promise<Count> {
    return this.formularioRepository.updateAll(formulario, where);
  }

  @get('/formularios/{id}')
  @response(200, {
    description: 'Formulario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Formulario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Formulario, {exclude: 'where'}) filter?: FilterExcludingWhere<Formulario>
  ): Promise<Formulario> {
    return this.formularioRepository.findById(id, filter);
  }

  @patch('/formularios/{id}')
  @response(204, {
    description: 'Formulario PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Formulario, {partial: true}),
        },
      },
    })
    formulario: Formulario,
  ): Promise<void> {
    await this.formularioRepository.updateById(id, formulario);
  }

  @put('/formularios/{id}')
  @response(204, {
    description: 'Formulario PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() formulario: Formulario,
  ): Promise<void> {
    await this.formularioRepository.replaceById(id, formulario);
  }

  @del('/formularios/{id}')
  @response(204, {
    description: 'Formulario DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.formularioRepository.deleteById(id);
  }
}
