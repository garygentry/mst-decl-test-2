"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
exports.ApiRequestConfigStore = mobx_state_tree_1.types.model('ApiRequestConfig', {
    id: mobx_state_tree_1.types.number,
    url: mobx_state_tree_1.types.string,
    baseURL: mobx_state_tree_1.types.string,
    method: mobx_state_tree_1.types.string,
});
//# sourceMappingURL=apiRequestConfig.js.map