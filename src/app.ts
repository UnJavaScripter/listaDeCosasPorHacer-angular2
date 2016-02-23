import {bootstrap} from 'angular2/platform/browser';
import {listaDeCosasPorHacer} from './app/lista-de-cosas-por-hacer';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(listaDeCosasPorHacer, [
  ROUTER_PROVIDERS
]);
