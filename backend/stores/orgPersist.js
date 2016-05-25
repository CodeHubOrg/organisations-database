import LokiPersist   from './lokiPersist';
import Organisations from './organisations';

export default class OrgPersist {
    constructor(path) {
        this.lp = new LokiPersist(path);
    }

    _withOrgs(db, action) {
        const orgs = new Organisations(db);
        return action(orgs);
    }

    _readOnly(action) { return this.lp.readOnly( (db) => this._withOrgs(db, action) ) }

    _persist(action)  { return this.lp.persist(  (db) => this._withOrgs(db, action) ) }

    all()    { return this._readOnly( (orgs) => orgs.all()    ) }

    byID(id) { return this._readOnly( (orgs) => orgs.byID(id) ) }

    add(org)    { return this._persist(  (orgs) => orgs.add(org)    ) }

    update(org) { return this._persist(  (orgs) => orgs.update(org) ) }
}
