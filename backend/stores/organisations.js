
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
        return this.orgs.insert(org);
    }

    update(org) {
        return this.orgs.update(org);
    }

    delete_by_id(id) {
        let org = this.by_id(id);
        return this.orgs.remove(org);
    }
}
