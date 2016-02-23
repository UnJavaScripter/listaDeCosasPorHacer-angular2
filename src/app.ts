import {bootstrap} from 'angular2/platform/browser';
import {ListaDeCosasPorHacerApp} from './app/lista-de-cosas-por-hacer';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(ListaDeCosasPorHacerApp, [
  ROUTER_PROVIDERS
]);
