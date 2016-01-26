"use strict";

class LocalBusinessRepository {
    constructor() {
        LocalBusinessRepository.businesses = [
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
        return LocalBusinessRepository.businesses;
    }

    addNew(business) {
        LocalBusinessRepository.businesses.push(business);
    }
}

module.exports = LocalBusinessRepository;