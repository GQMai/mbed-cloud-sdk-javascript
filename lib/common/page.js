"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Page = /** @class */ (function () {
    function Page(from, data, mapper) {
        this.currentIndex = 0;
        this.after = from.after;
        this.hasMore = from.has_more || from.hasMore;
        this.pageSize = ("limit" in from) ? from.limit : ("pageSize" in from) ? from.pageSize : undefined;
        this.order = from.order;
        // default to 0 if either is undefined
        this.totalCount = from.total_count || from.totalCount || 0;
        this.continuationMarker = from.continuation_marker || from.continuationMarker;
        if (mapper && data && data.length) {
            // mapping function has been provided so map the data
            this.data = data.map(function (key) { return mapper(key); }) || [];
        }
        else {
            // data has already been mapped so just assign it
            this.data = data || [];
        }
    }
    Page.prototype.first = function () {
        if (this.data && this.data[0]) {
            return this.data[0];
        }
    };
    Page.prototype.last = function () {
        if (this.data && this.data[this.data.length - 1]) {
            return this.data[this.data.length - 1];
        }
    };
    Page.prototype[Symbol.iterator] = function () {
        return this;
    };
    Page.prototype.next = function () {
        if (this.currentIndex < this.data.length) {
            return {
                done: false,
                value: this.data[this.currentIndex++],
            };
        }
        else {
            this.currentIndex = 0;
            return {
                done: true,
                value: null,
            };
        }
    };
    Page.prototype.return = function (value) {
        return {
            done: true,
            value: value,
        };
    };
    Page.prototype.throw = function (e) {
        throw e;
    };
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map