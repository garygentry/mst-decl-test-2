"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_state_tree_1 = require("mobx-state-tree");
var storeTypes_1 = require("../../storeTypes");
var searchResponse_1 = require("./searchResponse");
var searchRequest_1 = require("./searchRequest");
var team_1 = require("../team");
exports.TeamSearchStore = mobx_state_tree_1.types
    .model('TeamSearch', {
    request: mobx_state_tree_1.types.optional(searchRequest_1.SearchRequestStore, {}),
    response: mobx_state_tree_1.types.maybe(searchResponse_1.SearchResponseStore),
    isSearching: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.boolean),
    currentPageNumber: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.number),
    pageCount: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.number, 0),
    compareList: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.map(mobx_state_tree_1.types.reference(team_1.TeamStore)), {}),
    homeGeocode: mobx_state_tree_1.types.maybe(storeTypes_1.GeoCodeResultStore),
    isLoading: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.boolean, false),
})
    .views(function (self) { return ({
    get patientProfile() {
        return self.request ? self.request.patientProfile : undefined;
    },
    get requestSnapshot() {
        return mobx_state_tree_1.getSnapshot(self.request);
    },
    get hasNextPage() {
        return self.currentPageNumber && (self.currentPageNumber && self.currentPageNumber < self.pageCount)
            ? true
            : false;
    },
    get hasPreviousPage() {
        return self.currentPageNumber && self.currentPageNumber > 1 ? true : false;
    },
    get hitCount() {
        return self.response ? self.response.hitCount : 0;
    },
    get compareListArray() {
        var list = [];
        if (self.compareList && self.compareList.size > 0) {
            self.compareList.forEach(function (cli) {
                list.push(cli);
            });
        }
        return list;
    },
}); })
    .extend(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    var setResponse = function (response) {
        var appStore = mobx_state_tree_1.getRoot(self);
        response.hits = response.hits.map(function (h) {
            appStore.teams.cacheTeam(h.source);
            var team = h.id;
            return tslib_1.__assign({}, h, { team: team });
        });
        self.response = response;
        self.pageCount = Math.ceil(response.hitCount / self.request.resultsPerPage);
        self.currentPageNumber = response.hitCount > 0 ? self.request.page : undefined;
    };
    var requestSnapshot = function () {
        return mobx_state_tree_1.getSnapshot(self.request);
    };
    var performSearch = mobx_state_tree_1.flow(function performSearchgen() {
        var appStore, client, response, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appStore = mobx_state_tree_1.getRoot(self);
                    if (!appStore.isAuthenticated) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    self.isLoading = true;
                    client = env.apiClientFactory.create();
                    return [4 /*yield*/, client.api.search(self.requestSnapshot)];
                case 2:
                    response = _a.sent();
                    setResponse(response.data);
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("PerformSearch failed: " + e_1.message);
                case 4:
                    self.isLoading = false;
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
    return {
        views: {},
        actions: {
            performSearch: performSearch,
        },
    };
})
    .extend(function (self) {
    var _appStore = mobx_state_tree_1.getRoot(self);
    return {
        views: {},
        actions: {
            afterAttach: function () {
                self.performSearch();
                mobx_state_tree_1.onSnapshot(self.request, function (s) {
                    self.performSearch();
                });
            },
            navigate: function () {
                var params = {
                    q: JSON.stringify(mobx_state_tree_1.getSnapshot(self.request)),
                };
                //_appStore.router.navigate('search', params);
            },
            setRequest: function (request) {
                mobx_state_tree_1.applySnapshot(self.request, request);
            },
        },
    };
})
    .views(function (self) { return ({
    get currentPageHits() {
        if (self.response) {
            return self.response.hits;
        }
        else {
            return [];
        }
    },
}); });
//# sourceMappingURL=search.js.map