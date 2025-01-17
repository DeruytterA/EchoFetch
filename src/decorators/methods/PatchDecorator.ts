import { EchoService } from '../../service/EchoService'
import { RequestMethod } from '../../types/RequestMethod'

/**
 * Used for specifying a PATCH request
 * @param path Path to the endpoint to fetch
 * @constructor
 */
export function PATCH (path: string): Function {
    return EchoService._registerRequestMethod(RequestMethod.PATCH, path)
}
