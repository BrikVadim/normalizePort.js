//
// normalizePort.js
// Copyright © openApps. All rights reserved.
//
// Licensed under the MIT License.
// See License.txt in the project root for license information.
//

//-----------------------------------------------------------------------------

const MIN_PORT      = 1023
const MAX_PORT      = 65536

const DEFAULT_PORT  = 8080

//-----------------------------------------------------------------------------

module.exports = (port, default_port = DEFAULT_PORT) => {
    port = Number.parseInt(port)

    return MIN_PORT < port && port < MAX_PORT ? port : default_port
}

//-----------------------------------------------------------------------------
