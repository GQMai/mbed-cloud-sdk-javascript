export class Page {
    constructor(from, data, mapper) {
        this.currentIndex = 0;
        this.after = from.after;
        this.hasMore = from.has_more || from.hasMore;
        this.pageSize = ("limit" in from) ? from.limit : ("pageSize" in from) ? from.pageSize : undefined;
        this.order = from.order;
        // default to 0 if either is undefined
        this.totalCount = from.total_count || from.totalCount || 0;
        this.continuationMarker = from.continuation_marker || from.continuationMarker;
        this._data = new Array();
        if (data && data.length) {
            this._data = data;
            if (mapper) {
                this._data = this.mapData(mapper);
            }
        }
    }
    get data() {
        return this._data;
    }
    first() {
        if (this.data && this.data[0]) {
            return this.data[0];
        }
    }
    last() {
        if (this.data && this.data[this.data.length - 1]) {
            return this.data[this.data.length - 1];
        }
    }
    mapData(mapFunc) {
        return this.data.map(mapFunc);
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
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
    }
    return(value) {
        return {
            done: true,
            value,
        };
    }
    throw(e) {
        throw e;
    }
}
//# sourceMappingURL=page.js.map