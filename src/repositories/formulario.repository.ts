import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {XeniosFormularioDataSource} from '../datasources';
import {Formulario, FormularioRelations} from '../models';

export class FormularioRepository extends DefaultCrudRepository<
  Formulario,
  typeof Formulario.prototype.id,
  FormularioRelations
> {
  constructor(
    @inject('datasources.xeniosFormulario') dataSource: XeniosFormularioDataSource,
  ) {
    super(Formulario, dataSource);
  }
}
