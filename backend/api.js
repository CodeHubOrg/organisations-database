import { Router } from 'express';
import resource   from 'resource-router-middleware';
import OrgPersist from './stores/orgPersist.js';

const dbPath = __dirname + '/var/orgDB.js';

const orgResource = resource({

    id : 'id',

    // called for any request URI with an :id component,
    // req.id is then available later in the chain.
    load(req, id, callback) {
        const op  = new OrgPersist(dbPath);
        op.byID(id).then( (org) => {
            const err = org ? null : 'not found';
            req.orgPersist = op; // save the DB handle for later in the chain
            callback(err, org);
        }).catch( (err) => {
            next(err);
        });
    },

    // GET / - list all
    index({ params }, res) {
        const op  = new OrgPersist(dbPath);
        op.all().then( (orgs) => {
            res.send(res.json(orgs));
        }).catch( (err) => {
            next(err);
        });
    },

    // GET /:id - return the given org
    read({ id }, res) {
        res.json(id);
    },

    // POST / - add a new org
    create({ body }, res) {
        const op  = new OrgPersist(dbPath);
        op.add(body).then( (org) => {
            res.send(res.json(org));
        }).catch( (err) => {
            next(err);
        });
    },

    // PUT /:id - update the given org
    update({ id, orgPersist, body }, res) {
        for (let key in body) {
            if (key !== 'id') {
                id[key] = body[key];
            }
        }
        orgPersist.update(id).then( () => {
        res.sendStatus(204);
        }).catch( (err) => {
            next(err);
        });
    },

    // DELETE /:id - delete the given org
    delete({ id, orgPersist }, res) {
        orgPersist.deleteByID(id.id).then( () => {
        res.sendStatus(204);
        }).catch( (err) => {
            next(err);
        });
    }

});

export default function() {
    var api = Router();
    api.use('/organisations', orgResource);
    return api;
}
