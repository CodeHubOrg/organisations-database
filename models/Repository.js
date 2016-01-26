"use strict";

class Repository {
    constructor () {
        Repository.localBusinessRepository = new (require("./LocalBusinessRepository.js"))();
    }

    get organisationRepository() {
        return Repository.localBusinessRepository;
    }
}

module.exports = Repository;
