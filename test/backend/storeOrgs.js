import {expect} from 'chai';
import loki from 'lokijs';

import Organisations from '../../backend/stores/organisations.js';

const lokidb = new loki('testdb.js');
lokidb.addCollection('organisations');

describe('organisations store', () => {
    describe('add', () => {
        let orgs;
        it('makes a new store', () => {
            orgs = new Organisations(lokidb);
            expect(orgs).to.exist;
            expect(orgs.all()).to.eql([]);
        });
        it('adds an organisation to the store', () => {
            orgs.add({ name: 'Beetroot' });
            expect(orgs.all().length).to.equal(1);
            const o0 = orgs.all()[0];
            expect(o0.name).to.equal('Beetroot');
            expect(o0.$loki).to.exist;
        });
    });
});
