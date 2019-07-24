import { Order } from "../legacy/common/interfaces";
export declare class Page<T> implements IterableIterator<T> {
    private currentIndex;
    /**
     * List of results.
     */
    readonly data: Array<T>;
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
    constructor(from: any, data?: Array<T>, mapper?: (key: any) => T);
    first(): T;
    last(): T;
    [Symbol.iterator](): IterableIterator<T>;
    next(): IteratorResult<T>;
    return?(value?: T): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}
