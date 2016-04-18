import loki from 'lokijs';

export default class LokiPersist {
    constructor(path) {
        this.db = new loki(path);
    }

    load() {
        return new Promise( (resolve, reject) => {
            this.db.loadDatabase({}, resolve); 
        });
    }
    
    save() {
        return new Promise( (resolve, reject) => {
            this.db.saveDatabase(resolve);
        })
    }
    
    persist(action) {
        let result;
        return this.load()
                .then( () => { result = action(this.db) } )
                .then( () => this.save() )
                .then( () => result )
    }
}
