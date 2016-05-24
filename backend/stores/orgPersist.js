import LokiPersist from './lokiPersist';

export default class OrgPersist {
    constructor(path) {
        this.db = new LokiPersist(path);
    }
}
