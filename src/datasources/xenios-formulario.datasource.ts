import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'xeniosFormulario',
  connector: 'mysql',
  url: '',
  host: 'coinscontrol-prueba-jepierre89.f.aivencloud.com',
  port: 26556,
  user: 'coins',
  password: 'AVNS_1TIrwIfRu2vzbfW8xzF',
  database: 'xenios'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class XeniosFormularioDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'xeniosFormulario';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.xeniosFormulario', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
