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
    root.SimpleInventoryApi.Login = factory(root.SimpleInventoryApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Login model module.
   * @module model/Login
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Login</code>.
   * @alias module:model/Login
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Login</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Login} obj Optional instance to populate.
   * @return {module:model/Login} The populated <code>Login</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('userID'))
        obj.userID = ApiClient.convertToType(data['userID'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} userID
   */
  exports.prototype.userID = undefined;

  return exports;

}));