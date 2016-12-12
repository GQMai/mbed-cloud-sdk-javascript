/**
 * mbed Cloud Connect REST API
 * mbed Cloud Connect REST API allows web applications to communicate with devices.
 *
 * OpenAPI spec version: 2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Webhook', 'model/NotificationMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Webhook'), require('../model/NotificationMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.MbedCloudConnectRestApi) {
      root.MbedCloudConnectRestApi = {};
    }
    root.MbedCloudConnectRestApi.NotificationsApi = factory(root.MbedCloudConnectRestApi.ApiClient, root.MbedCloudConnectRestApi.Webhook, root.MbedCloudConnectRestApi.NotificationMessage);
  }
}(this, function(ApiClient, Webhook, NotificationMessage) {
  'use strict';

  /**
   * Notifications service.
   * @module api/NotificationsApi
   * @version 2
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:api/NotificationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v2NotificationCallbackPut operation.
     * @callback module:api/NotificationsApi~v2NotificationCallbackPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a callback URL
     * Register a URL to which the server should deliver notifications of the subscribed resource changes. To get notifications pushed you need to also place the subscriptions.  Notifications are delivered as PUT messages to the HTTP server defined by the client with a subscription server message. The given URL should be accessible and respond to the PUT request with response code of 200 or 204. mbed Cloud Connect tests the callback URL with empty payload when the URL is registered. For more information on callback notification, see NotificationData.  **Note**: Only one callback URL per access-key can be active. If you register a new URL when another one is already active, the old URL is replaced by the new. 
     * @param {module:model/Webhook} webhook A json object that contains the URL to which notifications need to be sent, and the optional headers. 
     * @param {module:api/NotificationsApi~v2NotificationCallbackPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2NotificationCallbackPut = function(webhook, callback) {
      var postBody = webhook;

      // verify the required parameter 'webhook' is set
      if (webhook == undefined || webhook == null) {
        throw "Missing the required parameter 'webhook' when calling v2NotificationCallbackPut";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/notification/callback', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2NotificationPullGet operation.
     * @callback module:api/NotificationsApi~v2NotificationPullGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get notifications using Long Poll
     * In this case, notifications are delivered through HTTP long-poll requests. The HTTP request is kept open until an event notification or a batch of event notifications are delivered to the client or the request times out (response code 204). In both cases, the client should open a new polling connection after the previous one closes. You must have a persistent connection (Connection keep-alive header in the request) to avoid excess TLS handshakes.  **Note:** If it is not possible to have a public facing callback URL, for example when developing on your local machine, you can use long polling to check for new messages. However, to reduce network traffic and to increase performance we recommend that you use callback URLs (webhooks) whenever possible. 
     * @param {module:api/NotificationsApi~v2NotificationPullGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationMessage}
     */
    this.v2NotificationPullGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = NotificationMessage;

      return this.apiClient.callApi(
        '/v2/notification/pull', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));