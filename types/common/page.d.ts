import { Order } from "../legacy/common/interfaces";
export declare class Page<T> implements IterableIterator<T> {
    private currentIndex;
    private _data;
    /**
     * Whether there are more results to display
     */
    readonly hasMore?: boolean;
    /**
     * Total number of records (Approximate number of results according to the API)
     */
    readonly totalCount?: number;
    /**
     * Entity id for fetch after it
     */
    readonly after?: string;
    /**
     * The page size
     */
    readonly pageSize?: number;
    /**
     * Order of returned records
     */
    readonly order?: Order;
    /**
     *  Entity id for fetch after it
     */
    readonly continuationMarker?: string;
    readonly data: Array<T>;
    constructor(from: any, data?: Array<T>, mapper?: (key: T, index?: number) => T);
    first(): T;
    last(): T;
    mapData(mapFunc: (key: T, index?: number) => T): Array<T>;
    [Symbol.iterator](): IterableIterator<T>;
    next(): IteratorResult<T>;
    return?(value?: T): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}
