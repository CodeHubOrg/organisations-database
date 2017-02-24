/*** This API is not currently not in use! But it would be good to find a way to integrate it
 Michale wrote it at the same time I started an API in the server.js file at root level ***/

import resource   from 'resource-router-middleware';
import ItemPersist from './stores/itemPersist.js';

const dbPath = __dirname + '/data/itemDB.js';

const itemResource = resource({

    id : 'id',

    // called for any request URI with an :id component,
    // req.id is then available later in the chain.
    load(req, id, callback) {
        const op  = new ItemPersist(dbPath);
        op.byID(id).then( (item) => {
            const err = item ? null : 'not found';
            req.ItemPersist = op; // save the DB handle for later in the chain
            callback(err, item);
        }).catch( (err) => {
            next(err);
        });
    },

    // GET / - list all
    index({ params }, res) {
        const op  = new ItemPersist(dbPath);
        op.all().then( (items) => {
            res.send(res.json(items));
        }).catch( (err) => {
            next(err);
        });
    },

    // GET /:id - return the given item
    read({ id }, res) {
        res.json(id);
    },

    // POST / - add a new item
    create({ body }, res) {
        const op  = new ItemPersist(dbPath);
        op.add(body).then( (item) => {
            res.send(res.json(item));
        }).catch( (err) => {
            next(err);
        });
    },

    // PUT /:id - update the given item
    update({ id, itemPersist, body }, res) {
        for (let key in body) {
            if (key !== 'id') {
                id[key] = body[key];
            }
        }
        itemPersist.update(id).then( () => {
        res.sendStatus(204);
        }).catch( (err) => {
            next(err);
        });
    },

    // DELETE /:id - delete the given item
    delete({ id, itemPersist }, res) {
        itemPersist.deleteByID(id.id).then( () => {
        res.sendStatus(204);
        }).catch( (err) => {
            next(err);
        });
    }

});

export default function() {
    var api = Router();
    api.use('/api/items', itemResource);
    return api;
}
