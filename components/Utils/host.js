let fallbackHost = 'localhost:3002'
let host = fallbackHost

let schemeForHttp = 'https://'

if (host === 'localhost:3002') {
    schemeForHttp = 'http://'
}

export const apiHost = schemeForHttp + host + '/api'