"use strict";
/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
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
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("../../common/functions");
/**
 * Connected Device
 */
var ConnectedDevice = (function () {
    function ConnectedDevice(init, _api) {
        this._api = _api;
        for (var key in init) {
            this[key] = init[key];
        }
    }
    ConnectedDevice.prototype.listResources = function (callback) {
        var _this = this;
        return functions_1.asyncStyle(function (done) {
            _this._api.listResources(_this.id, done);
        }, callback);
    };
    ConnectedDevice.prototype.listSubscriptions = function (callback) {
        var _this = this;
        return functions_1.asyncStyle(function (done) {
            _this._api.listDeviceSubscriptions(_this.id, done);
        }, callback);
    };
    ConnectedDevice.prototype.deleteSubscriptions = function (callback) {
        var _this = this;
        return functions_1.asyncStyle(function (done) {
            _this._api.deleteDeviceSubscriptions(_this.id, done);
        }, callback);
    };
    return ConnectedDevice;
}());
exports.ConnectedDevice = ConnectedDevice;