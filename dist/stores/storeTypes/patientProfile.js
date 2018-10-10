"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var geo_1 = require("./geo");
exports.PatientProfileStore = mobx_state_tree_1.types
    .model('PatientProfile', {
    condition: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    postalCode: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    countryCode: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    isHealthyVolunteer: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.boolean),
    age: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.number),
    gender: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.enumeration('Gender', ['Male', 'Female'])),
    geoLocation: mobx_state_tree_1.types.optional(geo_1.GeoLocationStore, {}),
})
    .actions(function (self) { return ({
    getSnapshot: function () {
        return mobx_state_tree_1.clone(self);
    },
    setCondition: function (condition) {
        console.log('setcondition');
        self.condition = condition;
    },
    setPostalCode: function (postalCode) {
        self.postalCode = postalCode;
        self.geoLocation.setPostalCode(postalCode);
    },
    setCountryCode: function (country) {
        self.countryCode = country;
        self.geoLocation.setCountry(country);
    },
    setIsHealthyVolunteer: function (value) {
        self.isHealthyVolunteer = value;
    },
    setAge: function (age) {
        self.age = age;
    },
    setGender: function (gender) {
        self.gender = gender;
    },
}); })
    .views(function (self) { return ({
    distanceFrom: function (from, units) {
        if (self.geoLocation.geoCodeResults && self.geoLocation.geoCodeResults.latLon) {
            //return distance(from, self.geoLocation.geoCodeResults.latLon, units);
        }
        else {
            return null;
        }
    },
}); });
//# sourceMappingURL=patientProfile.js.map