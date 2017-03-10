import {expect} from 'chai';
import fs   from 'fs';

import ItemPersist from '../../../backend/stores/itemPersist.js';

import lokiSetup from './lokiSetup.js';
const testPath = lokiSetup();

const testPromise = (desc, action, tests) => {
    it(desc, (done) => {
        const op = new ItemPersist(testPath);
        const promise = action(op);
        return promise.then( (data) => {
            tests(data);
            done();
        }).catch( (err) => console.error(err));
    })
};

describe('Item persist wrapper', () => {

    describe('new', () => {
        it('connects a new persistent db', () => {
            const op = new ItemPersist(testPath);
            expect(op).to.exist;
        });
    });

    let item;
    describe('add', () => {
        testPromise('adds an item to the db',
            (op) => op.add({ name: 'Beetroot' }),
            (data) => {
                expect(data.name).to.equal('Beetroot');
                item = data;
                // more tests here
            }
        );
        testPromise('adds another item to the db',
            (op) => op.add({ name: 'Roll FTS' }),
            (data) => expect(data.name).to.equal('Roll FTS')
        );
    });

    describe('byID', () => {
        testPromise('retrieves an item by id',
            (op) => op.byID(item.id),
            (data) => {
                expect(data).to.exist;
                expect(data.name).to.equal(item.name);
            }
        );
    })

    describe('all', () => {
        testPromise('retrieves all items',
            (op) => op.all(),
            (data) => {
                expect(data).to.exist;
                expect(data.length).to.equal(2);
                expect(data[0].name).to.equal('Beetroot');
            }
        );
    })

    describe('update', () => {
        testPromise('updates the item',
            (op) => {
                item.name = 'Turnip';
                return op.update(item);
            },
            (data) => expect(data.name).to.equal('Turnip')
        );
        testPromise('update persists',
            (op) => op.byID(item.id),
            (data) => expect(data.name).to.equal('Turnip')
        );
    })

    describe('deleteByID', () => {
        testPromise('deletes by id',
            (op) => op.deleteByID(item.id),
            (data) => expect('everything').to.be.ok
        );
        testPromise('should be gone',
            (op) => op.byID(item.id),
            (data) => expect(data).to.be.null
        );
    })
});
