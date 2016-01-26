"use strict";

class OrganisationRepository {
    constructor() {
        OrganisationRepository.organisations = [
            {
                id: "1",
                name: "Beatroot Cafe"
            },
            {
                id:"2",
                name: "Bike Workshop"
            }
        ]
    }

    fetchAll() {
        return OrganisationRepository.organisations;
    }

    findById(id){

    }

    addNew(organisation) {
        OrganisationRepository.organisations.push(organisation);
    }

    remove(organisation){

    }
}

module.exports = OrganisationRepository;