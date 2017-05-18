//
// Copyright © Brik Vadim. All rights reserved.
//
// Licensed under the MIT License.
// See License.txt in the project root for license information.
//

//-----------------------------------------------------------------------------

// normalizePort.js v1.2.0
// Library for a check the correctness of port

//-----------------------------------------------------------------------------

// Get suser privileges
const isRootUser = require('is-root')();

// The port can have a value from 1 to 65536
// NOTE: To install the port from 1 to 1023, you must have root
const MIN_PORT      = isRootUser ? 1 : 1023
const MAX_PORT      = 65536

// If invalid port is returned DEFAULT_PORT
const DEFAULT_PORT  = 3000

//-----------------------------------------------------------------------------

// Function of checking the correctness of port
module.exports = port => {
    port = Number.parseInt(port)

    return MIN_PORT < port && port < MAX_PORT ? port : DEFAULT_PORT
}

//-----------------------------------------------------------------------------
