import {expect} from 'chai';
import fs   from 'fs';

import OrgPersist from '../../../backend/stores/orgPersist.js';

const testPath = 'testdb.js';

// dup with lokiPersist.js
function setup() {
    fs.truncateSync(testPath, 0);
    console.log('setup done');
}

setup();

describe('org persist wrapper', () => {

    describe('new', () => {
        it('connects a new persistent db', () => {
            const op = new OrgPersist(testPath);
            expect(op).to.exist;
        });
    });

    describe('add', () => {
        it('adds an organisation to the db', (done) => {
            const op = new OrgPersist(testPath);
            const result = op.add({ name: 'Beetroot' });
            return result.then( (data) => {
                expect(data['name']).to.equal('Beetroot');
                // more tests here
                done();
            }).catch( (err) => console.error(err));
        });
    });

});
