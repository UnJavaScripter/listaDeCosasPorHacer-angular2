import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ListaDeCosasPorHacerApp} from '../app/lista-de-cosas-por-hacer';

beforeEachProviders(() => [ListaDeCosasPorHacerApp]);

describe('App: ListaDeCosasPorHacer', () => {
  it('should have the `defaultMeaning` as 42', inject([ListaDeCosasPorHacerApp], (app: ListaDeCosasPorHacerApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ListaDeCosasPorHacerApp], (app: ListaDeCosasPorHacerApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

