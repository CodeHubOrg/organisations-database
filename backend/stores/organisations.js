
export default class Organisations {
    constructor(db) {
        this.orgs = db.getCollection('organisations');
    }

    all() {
        return this.orgs.data;
    }

    by_id(id) {
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

    delete_by_id(id) {
        let org = this.by_id(id);
        return this.orgs.remove(org);
    }
}
