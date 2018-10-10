"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
exports.TimezoneStore = mobx_state_tree_1.types.model('Timezone', {
    name: mobx_state_tree_1.types.string,
    gmtOffset: mobx_state_tree_1.types.number,
    dstOffset: mobx_state_tree_1.types.number,
    rawOffset: mobx_state_tree_1.types.number,
});
//# sourceMappingURL=timezone.js.map