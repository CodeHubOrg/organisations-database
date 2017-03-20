
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

    add(item) {
        const added = this.items.insert(item);
        added.id = added.$loki;
        this.items.update(added);
        return added;
    }

    update(item) {
        return this.items.update(item);
    }

    deleteByID(id) {
        let item = this.byID(id);
        return this.items.remove(item);
    }
}
