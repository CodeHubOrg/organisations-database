import {expect} from 'chai';
import loki from 'lokijs';

import LokiPersist from '../../backend/stores/lokiPersist.js';

let testPath = 'testdb.js';

function setup() {
    const lokidb = new loki('testdb.js');
    lokidb.addCollection('tests');
    lokidb.saveDatabase;
    console.log('setup done');
}

setup();

describe('loki persist wrapper', () => {

    describe('new', () => {
        it('connects a new persistent loki', () => {
            let lp = new LokiPersist(testPath);
            expect(lp).to.exist;
        });
    });

    describe('add something', () => {
        it('adds something to the db', (done) => {
            let lp = new LokiPersist(testPath);
            var result = lp.persist( (db) => {
                let cln = db.addCollection('tests'); // because it doesn't exist yet
                cln.add({ added: 'stuff'});
                return 'bonanza';
            });
            return result.then( (data) => {
                expect(data).to.equal('bonanza');
                done();
            })
        });
    });

});
