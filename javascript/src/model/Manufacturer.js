/*
 * Simple Inventory API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
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
    if (!root.SimpleInventoryApi) {
      root.SimpleInventoryApi = {};
    }
    root.SimpleInventoryApi.Manufacturer = factory(root.SimpleInventoryApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Manufacturer model module.
   * @module model/Manufacturer
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Manufacturer</code>.
   * @alias module:model/Manufacturer
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    this.name = name;
  };

  /**
   * Constructs a <code>Manufacturer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Manufacturer} obj Optional instance to populate.
   * @return {module:model/Manufacturer} The populated <code>Manufacturer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('homePage'))
        obj.homePage = ApiClient.convertToType(data['homePage'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} homePage
   */
  exports.prototype.homePage = undefined;

  /**
   * @member {String} phone
   */
  exports.prototype.phone = undefined;

  return exports;

}));