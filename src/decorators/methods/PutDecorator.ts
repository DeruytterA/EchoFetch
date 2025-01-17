import { EchoService } from '../../service/EchoService'
import { RequestMethod } from '../../types/RequestMethod'

/**
 * Used for specifying a PUT request
 * @param path Path to the endpoint to fetch
 * @constructor
 */
export function PUT (path: string): Function {
    return EchoService._registerRequestMethod(RequestMethod.PUT, path)
}
