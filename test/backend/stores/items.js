import {expect} from 'chai';
import loki from 'lokijs';

import Items from '../../../backend/stores/items.js';

const lokidb = new loki('testdb.js');

describe('items store', () => {
    let items;
    describe('new', () => {
        it('makes a new store', () => {
            items = new Items(lokidb);
            expect(items).to.exist;
            expect(items.all()).to.eql([]);
        });
    });
    let added;
    describe('add', () => {
        it('adds an item to the store', () => {
            added = items.add({ name: 'Beetroot' });
            expect(added.name).to.equal('Beetroot');
            expect(added.id).to.exist;
            expect(items.all().length).to.equal(1);
            const o0 = items.all()[0];
            expect(o0.name).to.equal('Beetroot');
            expect(o0.id).to.exist;
        });
        it('adds another item to the store', () => {
            items.add({ name: 'Roll' });
            expect(items.all().length).to.equal(2);
            const o1 = items.all()[1];
            expect(o1.name).to.equal('Roll');
            expect(o1.id).to.exist;
        });
    });
    describe('byID', () => {
        it('finds the correct item', () => {
            const byID = items.byID(added.id);
            expect(byID).to.exist;
            expect(byID.id).to.equal(added.id);
            expect(byID.name).to.equal(added.name);
        });
    });
    describe('update', () => {
        it('updates the stored item', () => {
            added.description = 'new description';
            items.update(added);
            const byID = items.byID(added.id);
            expect(byID.name).to.equal(added.name);
            expect(byID.description).to.equal(added.description);
        });
    });
    describe('deleteByID', () => {
        it('deletes the item by id', () => {
            items.deleteByID(added.id);
            const byID = items.byID(added.id);
            expect(byID).to.be.null;
            expect(items.all().length).to.equal(1);
        });
    });
});
