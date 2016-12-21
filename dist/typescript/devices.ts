/* 
* mbed Cloud SDK
* Copyright 2017 ARM Limited
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import * as mds from "../_backends/mds";

interface DeviceConfig {
    host?: string;
    key?: string;
}

class Resource {

    client: any;
    obs: any;
    rt: any;
    type: any;
    uri: any;

    constructor(client, options) {
        this.client = client;
        this.obs = options.obs;
        this.rt = options.rt;
        this.type = options.type;
        this.uri = options.uri;
    }

    public getValue():Promise<any> {
        return new Promise(function(resolve, reject) {
            resolve("value - " + this.uri);
        }.bind(this));
    };
}

class Endpoint {

    client: any;
    name: any;
    status: any;
    type: any;

    constructor(client, options) {
        this.client = client;
        this.name = options.name;
        this.status = options.status;
        this.type = options.type;
    }

    public listResources():Promise<any> {
        return new Promise(function(resolve, reject) {
            var api = new mds.EndpointsApi(this.client);
            api.v2EndpointsEndpointNameGet(this.name, function(err, resources) {
                if (err) return reject(err);
                resources = resources.map(function(resource) {
                    return new Resource(this.client, resource);
                }.bind(this));
                resolve(resources);
            }.bind(this));
        }.bind(this));
    }
}

class Devices {

    client: any;

    constructor(options: DeviceConfig) {
        this.client = new mds.ApiClient();
        if (options.host) this.client.basePath = options.host;
        if (options.key) this.client.authentications.Bearer.apiKey = options.key;
        this.client.authentications.Bearer.apiKeyPrefix = 'Bearer';
    }

    public listEndpoints():Promise<any> {
        return new Promise(function(resolve, reject) {
            var api = new mds.EndpointsApi(this.client);
            api.v2EndpointsGet(null, function(err, endpoints) {
                if (err) return reject(err);
                endpoints = endpoints.map(function(endpoint) {
                    return new Endpoint(this.client, endpoint);
                }.bind(this));
                resolve(endpoints);
            }.bind(this));
        }.bind(this));
    }
}

export = Devices;

/*
promises and callbacks based on callback passed
publish docs to s3

mds.NotificationsApi.v2NotificationCallbackPut
mds.NotificationsApi.v2NotificationPullGet
mds.DefaultApi.v2NotificationCallbackDelete
mds.DefaultApi.v2NotificationCallbackGet
mds.ResourcesApi.v2EndpointsEndpointNameResourcePathDelete
mds.ResourcesApi.v2EndpointsEndpointNameResourcePathGet
mds.ResourcesApi.v2EndpointsEndpointNameResourcePathPost
mds.ResourcesApi.v2EndpointsEndpointNameResourcePathPut
mds.SubscriptionsApi.v2SubscriptionsGet
mds.SubscriptionsApi.v2SubscriptionsPut
mds.SubscriptionsApi.v2SubscriptionsDelete
mds.SubscriptionsApi.v2SubscriptionsEndpointNameDelete
mds.SubscriptionsApi.v2SubscriptionsEndpointNameGet
mds.SubscriptionsApi.v2SubscriptionsEndpointNameResourcePathDelete
mds.SubscriptionsApi.v2SubscriptionsEndpointNameResourcePathGet
mds.SubscriptionsApi.v2SubscriptionsEndpointNameResourcePathPut
*/