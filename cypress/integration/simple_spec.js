import {getHeader} from './utils';

const url = 'http://localhost:4200';

beforeEach(() => cy.visit(url));

it('has title text', () => {
  getHeader()
    .contains('Angular REST App')
});
