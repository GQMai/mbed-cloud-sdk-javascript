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
        if (mapper && data && data.length) {
            // mapping function has been provided so map the data
            this.data = data.map(key => mapper(key)) || [];
        }
        else {
            // data has already been mapped so just assign it
            this.data = data || [];
        }
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