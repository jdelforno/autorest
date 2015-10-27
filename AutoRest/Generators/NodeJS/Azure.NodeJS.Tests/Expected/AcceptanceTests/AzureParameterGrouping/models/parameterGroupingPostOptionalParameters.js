/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.12.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ParameterGroupingPostOptionalParameters class.
 * @constructor
 * Additional parameters for the postOptional operation.
 * @member {string} [customHeader]
 * 
 * @member {number} [query] Query parameter with default
 * 
 */
function ParameterGroupingPostOptionalParameters(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.customHeader !== undefined) {
      this.customHeader = parameters.customHeader;
    }
    if (parameters.query !== undefined) {
      this.query = parameters.query;
    }
  }    
}



module.exports = ParameterGroupingPostOptionalParameters;
