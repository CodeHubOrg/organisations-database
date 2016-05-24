
export default class Organisations {
    constructor(db) {
        this.orgs = db.getCollection('organisations');
        if (!this.orgs) {
            this.orgs = db.addCollection('organisations');
        }
    }

    all() {
        return this.orgs.data;
    }

    byID(id) {
        return this.orgs.get(id);
    }

    add(org) {
        const added = this.orgs.insert(org);
        added.id = added.$loki;
        this.orgs.update(added);
        return added;
    }

    update(org) {
        return this.orgs.update(org);
    }

    delete_byID(id) {
        let org = this.byID(id);
        return this.orgs.remove(org);
    }
}
