/**
 * Firmware Catalog API
 * This is the API Documentation for the mbed firmware catalog service which is part of the update service.
 *
 * OpenAPI spec version: 0.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FirmwareCatalogApi) {
      root.FirmwareCatalogApi = {};
    }
    root.FirmwareCatalogApi.FirmwareImageSerializerData = factory(root.FirmwareCatalogApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FirmwareImageSerializerData model module.
   * @module model/FirmwareImageSerializerData
   * @version 0.1
   */

  /**
   * Constructs a new <code>FirmwareImageSerializerData</code>.
   * @alias module:model/FirmwareImageSerializerData
   * @class
   * @param datafile {String} The binary file of firmware image
   * @param description {String} The description of the object
   * @param createdAt {Date} The time the object was created
   * @param _object {String} The API resource entity
   * @param updatedAt {Date} The time the object was updated
   * @param imageId {String} DEPRECATED: The ID of the firmware image
   * @param etag {Date} The entity instance signature
   * @param datafileChecksum {String} Checksum generated for the datafile
   * @param id {String} The ID of the firmware image
   * @param name {String} The name of the object
   */
  var exports = function(datafile, description, createdAt, _object, updatedAt, imageId, etag, datafileChecksum, id, name) {
    var _this = this;

    _this['datafile'] = datafile;
    _this['description'] = description;
    _this['created_at'] = createdAt;
    _this['object'] = _object;
    _this['updated_at'] = updatedAt;
    _this['image_id'] = imageId;
    _this['etag'] = etag;
    _this['datafile_checksum'] = datafileChecksum;
    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>FirmwareImageSerializerData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FirmwareImageSerializerData} obj Optional instance to populate.
   * @return {module:model/FirmwareImageSerializerData} The populated <code>FirmwareImageSerializerData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('datafile')) {
        obj['datafile'] = ApiClient.convertToType(data['datafile'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('image_id')) {
        obj['image_id'] = ApiClient.convertToType(data['image_id'], 'String');
      }
      if (data.hasOwnProperty('etag')) {
        obj['etag'] = ApiClient.convertToType(data['etag'], 'Date');
      }
      if (data.hasOwnProperty('datafile_checksum')) {
        obj['datafile_checksum'] = ApiClient.convertToType(data['datafile_checksum'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The binary file of firmware image
   * @member {String} datafile
   */
  exports.prototype['datafile'] = undefined;
  /**
   * The description of the object
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The time the object was created
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The API resource entity
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * The time the object was updated
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * DEPRECATED: The ID of the firmware image
   * @member {String} image_id
   */
  exports.prototype['image_id'] = undefined;
  /**
   * The entity instance signature
   * @member {Date} etag
   */
  exports.prototype['etag'] = undefined;
  /**
   * Checksum generated for the datafile
   * @member {String} datafile_checksum
   */
  exports.prototype['datafile_checksum'] = undefined;
  /**
   * The ID of the firmware image
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the object
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

