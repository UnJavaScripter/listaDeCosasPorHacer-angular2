import {Component, Input} from 'angular2/core';
import {Cosa} from '../cosa';

@Component({
    selector: 'lista-de-cosas',
    styleUrls: ['./app/components/lista-de-cosas/lista-de-cosas.css'],
    templateUrl: './app/components/lista-de-cosas/lista-de-cosas.html'
})
export class ListaDeCosas {
    @Input() cosas: Cosa[];
}

