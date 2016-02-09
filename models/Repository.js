"use strict";

class Repository {
    constructor () {
        Repository.organisationRepository = new (require("./OrganisationRepository.js"))();
    }

    get organisationRepository() {
        return Repository.organisationRepository;
    }
}

module.exports = Repository;

