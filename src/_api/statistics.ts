// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================
/**
 * Connect Statistics API
 * mbed Cloud Connect Statistics API provides statistics about other cloud services through defined counters.
 *
 * OpenAPI spec version: 3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable */
/* tslint:disable:no-implicit-any */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";
import { SDKError } from "../common/sdkError";

export interface ErrorResponse {
    /**
     * HTTP response code.
     */
    "code"?: number;
    /**
     * Details of the error fields.
     */
    "fields"?: Array<Field>;
    /**
     * Response type, always \"error\".
     */
    "object"?: string;
    /**
     * Request ID.
     */
    "request_id"?: string;
    /**
     * Description of the error.
     */
    "message"?: string;
    /**
     * Type of error.
     */
    "type"?: string;
}

export interface Field {
    /**
     * Error description.
     */
    "message"?: string;
    /**
     * The field name in the request for which the validation has failed
     */
    "name"?: string;
}

export interface Metric {
    /**
     * Number of failed device server REST API requests the account has used.
     */
    "device_server_rest_api_error"?: number;
    /**
     * Number of failed bootstraps the account has used.
     */
    "bootstraps_failed"?: number;
    /**
     * Number of transaction events from devices linked to the account.
     */
    "transactions"?: number;
    /**
     * UTC time in RFC3339 format
     */
    "timestamp"?: string;
    /**
     * Maximum number of registered devices linked to the account.
     */
    "registered_devices"?: number;
    /**
     * Number of pending bootstraps the account has used.
     */
    "bootstraps_pending"?: number;
    /**
     * Number of failed handshakes the account has used.
     */
    "handshakes_failed"?: number;
    /**
     * Number of successful handshakes the account has used.
     */
    "handshakes_successful"?: number;
    /**
     * Number of successful bootstraps the account has used.
     */
    "bootstraps_successful"?: number;
    /**
     * Number of successful device server REST API requests the account has used.
     */
    "device_server_rest_api_success"?: number;
}

export interface SuccessfulResponse {
    /**
     * continuation_token included in the request or null.
     */
    "after"?: string;
    /**
     * true when there are more results to fetch using the included continuation_token.
     */
    "has_more"?: boolean;
    /**
     * API resource name.
     */
    "object"?: string;
    /**
     * limit used in the request to retrieve the results.
     */
    "limit"?: number;
    /**
     * token to use in after request parameter to fetch more results.
     */
    "continuation_token"?: string;
    "data"?: Array<Metric>;
}

/**
 * AccountApi
 */
export class AccountApi extends ApiBase {

    /** 
     * Provides account-specific statistics for other cloud services.
     * This REST API is used to get account-specific statistics.
     * @param include A comma-separated list of requested metrics. Supported values are:  - &#x60;transactions&#x60; - &#x60;registered_devices&#x60; - &#x60;bootstraps_successful&#x60; - &#x60;bootstraps_failed&#x60; - &#x60;bootstraps_pending&#x60; - &#x60;handshakes_successful&#x60; - &#x60;handshakes_failed&#x60; - &#x60;device_server_rest_api_success&#x60; - &#x60;device_server_rest_api_error&#x60; 
     * @param interval Group data by this interval in minutes, hours, days or weeks. Sample values: 5m, 2h, 3d, 4w. The maximum interval cannot exceed more than one year ( 365 days ) and so the allowed ranges are 5m - 525600m / 1h - 8760h / 1d - 365d / 1w - 53w. 
     * @param authorization Bearer {Access Token}. A valid API Gateway access token. The token is validated and the associated account identifier is used to retrieve account-specific statistics. 
     * @param start UTC time/year/date in RFC3339 format. Fetch the data with timestamp greater than or equal to this value. Sample values: 20170207T092056990Z / 2017-02-07T09:20:56.990Z / 2017 / 20170207. The maximum time between start and end parameters cannot exceed more than one year (365 days). The parameter is not mandatory, if the period is specified. 
     * @param end UTC time/year/date in RFC3339 format. Fetch the data with timestamp less than this value.Sample values: 20170207T092056990Z / 2017-02-07T09:20:56.990Z / 2017 / 20170207. The maximum time between start and end parameters cannot exceed more than one year ( 365 days ). The parameter is not mandatory, if the period is specified. 
     * @param period Period. Fetch the data for the period in minutes, hours, days or weeks. Sample values: 5m, 2h, 3d, 4w. The parameter is not mandatory, if the start and end time are specified. The maximum period cannot exceed more than one year ( 365 days ) and so the allowed ranges are 5m - 525600m / 1h - 8760h / 1d - 365d / 1w - 53w. 
     * @param limit Limit the number of results returned. Default value is 50, minimum value is 2 and maximum value is 1000. 
     * @param after The continuous_token included in the previous response to retrieve the next page of results. 
     * @param order The order to sort the results. Default value is ASC. Allowed values are ASC / DESC. 
     */
    v3MetricsGet (include: string, interval: string, authorization: string, start?: string, end?: string, period?: string, limit?: number, after?: string, order?: string, callback?: (error:any, data?:SuccessfulResponse, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "include" is set
        if (include === null || include === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'include' missing."));
            }
            return;
        }
        // verify required parameter "interval" is set
        if (interval === null || interval === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'interval' missing."));
            }
            return;
        }
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};
        if (include !== undefined) {
            queryParameters['include'] = include;
        }
        if (start !== undefined) {
            queryParameters['start'] = start;
        }
        if (end !== undefined) {
            queryParameters['end'] = end;
        }
        if (period !== undefined) {
            queryParameters['period'] = period;
        }
        if (interval !== undefined) {
            queryParameters['interval'] = interval;
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request<SuccessfulResponse>({
            url: '/v3/metrics',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

/**
 * StatisticsApi
 */
export class StatisticsApi extends ApiBase {

    /** 
     * Provides account-specific statistics for other cloud services.
     * This REST API is used to get account-specific statistics.
     * @param include A comma-separated list of requested metrics. Supported values are:  - &#x60;transactions&#x60; - &#x60;registered_devices&#x60; - &#x60;bootstraps_successful&#x60; - &#x60;bootstraps_failed&#x60; - &#x60;bootstraps_pending&#x60; - &#x60;handshakes_successful&#x60; - &#x60;handshakes_failed&#x60; - &#x60;device_server_rest_api_success&#x60; - &#x60;device_server_rest_api_error&#x60; 
     * @param interval Group data by this interval in minutes, hours, days or weeks. Sample values: 5m, 2h, 3d, 4w. The maximum interval cannot exceed more than one year ( 365 days ) and so the allowed ranges are 5m - 525600m / 1h - 8760h / 1d - 365d / 1w - 53w. 
     * @param authorization Bearer {Access Token}. A valid API Gateway access token. The token is validated and the associated account identifier is used to retrieve account-specific statistics. 
     * @param start UTC time/year/date in RFC3339 format. Fetch the data with timestamp greater than or equal to this value. Sample values: 20170207T092056990Z / 2017-02-07T09:20:56.990Z / 2017 / 20170207. The maximum time between start and end parameters cannot exceed more than one year (365 days). The parameter is not mandatory, if the period is specified. 
     * @param end UTC time/year/date in RFC3339 format. Fetch the data with timestamp less than this value.Sample values: 20170207T092056990Z / 2017-02-07T09:20:56.990Z / 2017 / 20170207. The maximum time between start and end parameters cannot exceed more than one year ( 365 days ). The parameter is not mandatory, if the period is specified. 
     * @param period Period. Fetch the data for the period in minutes, hours, days or weeks. Sample values: 5m, 2h, 3d, 4w. The parameter is not mandatory, if the start and end time are specified. The maximum period cannot exceed more than one year ( 365 days ) and so the allowed ranges are 5m - 525600m / 1h - 8760h / 1d - 365d / 1w - 53w. 
     * @param limit Limit the number of results returned. Default value is 50, minimum value is 2 and maximum value is 1000. 
     * @param after The continuous_token included in the previous response to retrieve the next page of results. 
     * @param order The order to sort the results. Default value is ASC. Allowed values are ASC / DESC. 
     */
    v3MetricsGet (include: string, interval: string, authorization: string, start?: string, end?: string, period?: string, limit?: number, after?: string, order?: string, callback?: (error:any, data?:SuccessfulResponse, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "include" is set
        if (include === null || include === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'include' missing."));
            }
            return;
        }
        // verify required parameter "interval" is set
        if (interval === null || interval === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'interval' missing."));
            }
            return;
        }
        // verify required parameter "authorization" is set
        if (authorization === null || authorization === undefined) {
            if (callback) {
                callback(new SDKError("Required parameter 'authorization' missing."));
            }
            return;
        }

        let headerParams: any = {};
        headerParams['Authorization'] = authorization;

        let queryParameters: any = {};
        if (include !== undefined) {
            queryParameters['include'] = include;
        }
        if (start !== undefined) {
            queryParameters['start'] = start;
        }
        if (end !== undefined) {
            queryParameters['end'] = end;
        }
        if (period !== undefined) {
            queryParameters['period'] = period;
        }
        if (interval !== undefined) {
            queryParameters['interval'] = interval;
        }
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request<SuccessfulResponse>({
            url: '/v3/metrics',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

