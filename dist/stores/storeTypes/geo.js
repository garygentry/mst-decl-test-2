"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_state_tree_1 = require("mobx-state-tree");
var mobx_1 = require("mobx");
exports.LatLonStore = mobx_state_tree_1.types.model('LatLon', {
    lat: mobx_state_tree_1.types.number,
    lon: mobx_state_tree_1.types.number,
});
exports.GeoCodeResultStore = mobx_state_tree_1.types.model('GeoCodeResult', {
    latLon: exports.LatLonStore,
});
exports.GeoLocationStore = mobx_state_tree_1.types
    .model('GeoLocation', {
    postalCode: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    country: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.string),
    geoCodeResults: mobx_state_tree_1.types.maybe(exports.GeoCodeResultStore),
    isLoading: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.boolean, false),
})
    .extend(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    var fetchGeoCode = mobx_state_tree_1.flow(function performSearch() {
        var client, response, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    if (!(self.postalCode && self.country)) return [3 /*break*/, 2];
                    self.isLoading = true;
                    client = env.apiClientFactory.create();
                    return [4 /*yield*/, client.api.geocode(self.postalCode, self.country)];
                case 1:
                    response = _a.sent();
                    self.geoCodeResults = response.data;
                    console.log('fetched geocode:');
                    console.log(response.data);
                    _a.label = 2;
                case 2: return [3 /*break*/, 5];
                case 3:
                    e_1 = _a.sent();
                    console.error('Search API call failed', e_1);
                    return [3 /*break*/, 5];
                case 4:
                    self.isLoading = false;
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
    return {
        actions: {
            fetchGeoCode: fetchGeoCode,
        },
    };
})
    .actions(function (self) {
    var setPostalCode = function (postalCode) {
        self.postalCode = postalCode;
    };
    var setCountry = function (country) {
        self.country = country;
    };
    return {
        setPostalCode: setPostalCode,
        setCountry: setCountry,
    };
})
    .actions(function (self) { return ({
    afterCreate: function () {
        mobx_1.reaction(function () { return self.country && self.postalCode; }, function () {
            self.fetchGeoCode();
        });
    },
}); })
    .extend(function (self) {
    return {};
})
    .views(function (self) { return ({}); });
//# sourceMappingURL=geo.js.map