import LokiPersist   from './lokiPersist';
import Organisations from './organisations';

export default class OrgPersist {
    constructor(path) {
        this.lp = new LokiPersist(path);
    }

    all() {
        return this.lp.readOnly( (db) => {
            const orgs = new Organisations(db);
            return orgs.all();
        });
    }

    byID(id) {
        return this.lp.readOnly( (db) => {
            const orgs = new Organisations(db);
            return orgs.byID(id);
        });
    }

    add(org) {
        return this.lp.persist( (db) => {
            const orgs = new Organisations(db);
            return orgs.add(org);
        });
    }
}
