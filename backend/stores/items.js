
export default class Items {
    constructor(db) {
        this.items = db.getCollection('items');
        if (!this.items) {
            this.items = db.addCollection('items');
        }
    }

    all() {
        return this.items.data;
    }

    byID(id) {
        return this.items.get(id);
    }

    add(org) {
        const added = this.items.insert(org);
        added.id = added.$loki;
        this.items.update(added);
        return added;
    }

    update(org) {
        return this.items.update(org);
    }

    deleteByID(id) {
        let item = this.byID(id);
        return this.items.remove(org);
    }
}
