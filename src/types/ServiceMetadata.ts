import { RequestMethod } from './RequestMethod'
import { RequestHeaders } from './RequestHeaders'
import { RequestQueries } from './RequestQueries'

export class ServiceMetadata {
    /**
     * EchoRequest method used when fetching from an API.
     */
    requestMethod?: RequestMethod;

    /**
     * EchoRequest path that will be used:
     *  - As primary URL (when no base URL is specified)
     *  - As path, joined with the base URL
     */
    requestPath?: String;

    /**
     * EchoRequest headers that will be send with the request.
     * These will be joined together with "requestHeaderParameters"
     */
    requestHeaders?: RequestHeaders;

    /**
     * EchoRequest queries that will be send with the request.
     * These will be joined together with "requestQueryParameters"
     */
    requestQueries?: RequestQueries;

    /**
     * EchoRequest path parameters
     *  Key: index of the parameter in the method.
     *  Value: name of the path parameter
     */
    requestPathParameters: Map<number, string> = new Map();

    /**
     * EchoRequest header parameters.
     *  Key: index of the parameter in the method.
     *  Value: name of the header
     *
     */
    requestHeaderParameters: Map<number, string> = new Map();

    /**
     * EchoRequest body parameters.
     * All body parameter values will be merged into an object and passed as HTTP Body to the request.
     *  Element: index of the parameter in the method.
     */
    requestBodyParameters: Array<number> = new Array();

    /**
     * EchoRequest query parameters.
     *  Key: index of the parameter in the method.
     *  Value: name of the query
     */
    requestQueryParameters: Map<number, string> = new Map();

    /**
     * EchoRequest form fields parameters.
     *  Key: index of the parameter in the method.
     *  Value: key of the form field parameter + if the parameter is an object of form fields or a single field
     */
    requestFormFieldParameters: Map<number, { key: string, isObject: boolean }> = new Map();

    /**
     * If the encoding of the data is application/x-www-form-urlencoded
     */
    isFormUrlEncoded: boolean = false;

    /**
     * If the encoding of the data is multipart/form-data
     */
    isFormMultipart: boolean = false;
}
