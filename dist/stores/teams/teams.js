"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mobx_state_tree_1 = require("mobx-state-tree");
var search_1 = require("./search");
var team_1 = require("./team");
exports.TeamsStore = mobx_state_tree_1.types
    .model('Teams', {
    activeTeam: mobx_state_tree_1.types.maybe(mobx_state_tree_1.types.reference(team_1.TeamStore)),
    search: mobx_state_tree_1.types.optional(search_1.TeamSearchStore, {}),
    cache: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.map(team_1.TeamStore), {}),
    isLoading: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.boolean, false),
})
    .extend(function (self) {
    var cacheTeam = function (team, isActive) {
        if (isActive === void 0) { isActive = false; }
        //const teamStore = toTeamStore(team);
        // self.cache.put(teamStore);
        // if (isActive) {
        //     self.activeTeam = teamStore.id as any; //tslint:disable-line no-any
        // }
    };
    return {
        actions: {
            cacheTeam: cacheTeam,
        },
    };
})
    .extend(function (self) {
    var env = mobx_state_tree_1.getEnv(self);
    var fetchTeam = mobx_state_tree_1.flow(function fetchTeamg(//tslint:disable-line no-any
    id, isActive) {
        if (isActive === void 0) { isActive = false; }
        var client, response, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    self.isLoading = true;
                    client = env.apiClientFactory.create();
                    return [4 /*yield*/, client.api.team(id)];
                case 1:
                    response = _a.sent();
                    self.cacheTeam(response.data, isActive);
                    return [3 /*break*/, 4];
                case 2:
                    e_1 = _a.sent();
                    throw new Error("fetchTeam failed: " + e_1.message);
                case 3:
                    self.isLoading = false;
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    });
    return {
        actions: {
            fetchTeam: fetchTeam,
        },
    };
})
    .actions(function (self) { return ({
    load: function (nctOrTeam, isActive) {
        if (isActive === void 0) { isActive = false; }
        debugger;
        if (nctOrTeam) {
            //const id = typeof nctOrTeam === 'string' ? nctOrTeam : get(nctOrTeam, 'id');
            var id = '';
            if (!id) {
                throw new Error('Invalid argument to setActiveTeam.  No Id');
            }
            var cached = self.cache.get(id);
            if (!cached) {
                //self.cacheTeam({ id } as ITeamStore);
                cached = self.cache.get(id);
            }
            if (cached.loadState !== 'full') {
                self.fetchTeam(nctOrTeam, isActive);
            }
            else if (isActive) {
                self.activeTeam = id;
            }
        }
        else if (isActive) {
            self.activeTeam = undefined;
        }
    },
}); })
    .actions(function (self) { return ({
    setActiveTeam: function (nctOrTeam) {
        self.load(nctOrTeam, true);
    },
}); })
    .views(function (self) { return ({}); });
//# sourceMappingURL=teams.js.map