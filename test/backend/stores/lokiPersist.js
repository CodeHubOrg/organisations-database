import {expect} from 'chai';
import loki from 'lokijs';
import fs   from 'fs';

import LokiPersist from '../../../backend/stores/lokiPersist.js';

const testPath = 'testdb.js';

function setup() {
    fs.truncateSync(testPath, 0);
    console.log('setup done');
}

setup();

describe('loki persist wrapper', () => {

    describe('new', () => {
        it('connects a new persistent loki', () => {
            const lp = new LokiPersist(testPath);
            expect(lp).to.exist;
        });
    });

    describe('add something', () => {
        it('adds something to the db', (done) => {
            const lp = new LokiPersist(testPath);
            var result = lp.persist( (db) => {
                const cln = db.addCollection('tests'); // because it doesn't exist yet
                const result = cln.insert({ added: 'stuff'});
                return result;
            });
            return result.then( (data) => {
                expect(data['added']).to.equal('stuff');
                const cln = lp.db.getCollection('tests');
                expect(cln).to.exist;
                expect(cln.data).to.exist;
                const added = cln.findOne({added: 'stuff'});
                expect(added).to.exist;
                done();
            }).catch( (err) => console.error(err));
        });
    });

    describe('something is still there', () => {
        it('gets something back from the db', (done) => {
            const lp = new LokiPersist(testPath);
            var result = lp.persist( (db) => {
                const cln = db.getCollection('tests');
                return cln.data;
            });
            return result.then( (data) => {
                expect(data.length).to.equal(1);
                done();
            })
        });
    });

});
