import LokiPersist   from './lokiPersist';
import Items from './items';

export default class ItemPersist {
    constructor(path) {
        this.lp = new LokiPersist(path);
    }

    _withItems(db, action) {
        const items = new Items(db);
        return action(items);
    }

    _readOnly(action) { return this.lp.readOnly( (db) => this._withItems(db, action) ) }

    _persist(action)  { return this.lp.persist(  (db) => this._withItems(db, action) ) }

    all()    { return this._readOnly( (items) => items.all()    ) }

    byID(id) { return this._readOnly( (items) => items.byID(id) ) }

    add(item)       { return this._persist( (items) => items.add(item)       ) }

    update(item)    { return this._persist( (items) => items.update(item)   ) }

    deleteByID(id) { return this._persist( (items) => items.deleteByID(id) ) }

}
