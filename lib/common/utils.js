"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = function (val) {
    if (val === null) {
        return false;
    }
    return ((typeof val === "function") || (typeof val === "object"));
};
//# sourceMappingURL=utils.js.map