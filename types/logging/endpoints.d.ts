import { ConnectionOptions } from "../common/interfaces";
import { DefaultApi as CatalogApi } from "../_api/device_catalog";
export declare class Endpoints {
    catalog: CatalogApi;
    constructor(options: ConnectionOptions);
}
