import { EchoResponse } from '../types/EchoResponse'

export interface EchoServiceConverter {

    /**
     * Get if the converter should convert a given response.
     * @param response
     */
    canConvert(response: EchoResponse): boolean;

    /**
     * Convert a fetch response to a different type.
     * @param response
     */
    convert(response: EchoResponse): any;
}
