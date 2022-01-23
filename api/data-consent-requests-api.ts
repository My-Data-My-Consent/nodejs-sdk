/* tslint:disable */
/* eslint-disable */
/**
 * My Data My Consent - Developer API
 * Unleashing the power of data consent by establishing trust. The Platform Core Developer API defines a set of capabilities that can be used to request, issue, manage and update data, documents and credentials by organizations. The API can be used to request, manage and update Decentralised Identifiers, Financial Data, Health Data issue Documents, Credentials directly or using OpenID Connect flows, and verify Messages signed with DIDs and much more.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@mydatamyconsent.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DataConsentDetailsDto } from '../models';
// @ts-ignore
import { DataConsentRequestModel } from '../models';
// @ts-ignore
import { DataConsentStatus } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * DataConsentRequestsApi - axios parameter creator
 * @export
 */
export const DataConsentRequestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Revoke / Cancel the ConsentRequest based on Id
         * @param {string} requestId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelConsentRequest: async (requestId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestId' is not null or undefined
            assertParamExists('cancelConsentRequest', 'requestId', requestId)
            const localVarPath = `/v1/consent-requests/{requestId}/cancel`
                .replace(`{${"requestId"}}`, encodeURIComponent(String(requestId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a consent request.
         * @param {DataConsentRequestModel} [dataConsentRequestModel] MyDataMyConsent.Models.Consents.DataConsentRequestModel.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequest: async (dataConsentRequestModel?: DataConsentRequestModel, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/consent-requests`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(dataConsentRequestModel, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all Consent Requests.
         * @param {number} [pageNo] 
         * @param {number} [pageSize] 
         * @param {DataConsentStatus} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConsentRequests: async (pageNo?: number, pageSize?: number, status?: DataConsentStatus, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/consent-requests`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageNo !== undefined) {
                localVarQueryParameter['pageNo'] = pageNo;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a Consent Request by ID.
         * @param {string} requestId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsentRequestById: async (requestId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestId' is not null or undefined
            assertParamExists('getConsentRequestById', 'requestId', requestId)
            const localVarPath = `/v1/consent-requests/{requestId}`
                .replace(`{${"requestId"}}`, encodeURIComponent(String(requestId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataConsentRequestsApi - functional programming interface
 * @export
 */
export const DataConsentRequestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataConsentRequestsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Revoke / Cancel the ConsentRequest based on Id
         * @param {string} requestId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelConsentRequest(requestId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelConsentRequest(requestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a consent request.
         * @param {DataConsentRequestModel} [dataConsentRequestModel] MyDataMyConsent.Models.Consents.DataConsentRequestModel.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRequest(dataConsentRequestModel?: DataConsentRequestModel, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRequest(dataConsentRequestModel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all Consent Requests.
         * @param {number} [pageNo] 
         * @param {number} [pageSize] 
         * @param {DataConsentStatus} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllConsentRequests(pageNo?: number, pageSize?: number, status?: DataConsentStatus, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllConsentRequests(pageNo, pageSize, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a Consent Request by ID.
         * @param {string} requestId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConsentRequestById(requestId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataConsentDetailsDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getConsentRequestById(requestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataConsentRequestsApi - factory interface
 * @export
 */
export const DataConsentRequestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataConsentRequestsApiFp(configuration)
    return {
        /**
         * 
         * @summary Revoke / Cancel the ConsentRequest based on Id
         * @param {string} requestId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelConsentRequest(requestId: string, options?: any): AxiosPromise<boolean> {
            return localVarFp.cancelConsentRequest(requestId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a consent request.
         * @param {DataConsentRequestModel} [dataConsentRequestModel] MyDataMyConsent.Models.Consents.DataConsentRequestModel.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRequest(dataConsentRequestModel?: DataConsentRequestModel, options?: any): AxiosPromise<boolean> {
            return localVarFp.createRequest(dataConsentRequestModel, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all Consent Requests.
         * @param {number} [pageNo] 
         * @param {number} [pageSize] 
         * @param {DataConsentStatus} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllConsentRequests(pageNo?: number, pageSize?: number, status?: DataConsentStatus, options?: any): AxiosPromise<object> {
            return localVarFp.getAllConsentRequests(pageNo, pageSize, status, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a Consent Request by ID.
         * @param {string} requestId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConsentRequestById(requestId: string, options?: any): AxiosPromise<DataConsentDetailsDto> {
            return localVarFp.getConsentRequestById(requestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataConsentRequestsApi - object-oriented interface
 * @export
 * @class DataConsentRequestsApi
 * @extends {BaseAPI}
 */
export class DataConsentRequestsApi extends BaseAPI {
    /**
     * 
     * @summary Revoke / Cancel the ConsentRequest based on Id
     * @param {string} requestId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataConsentRequestsApi
     */
    public cancelConsentRequest(requestId: string, options?: any) {
        return DataConsentRequestsApiFp(this.configuration).cancelConsentRequest(requestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a consent request.
     * @param {DataConsentRequestModel} [dataConsentRequestModel] MyDataMyConsent.Models.Consents.DataConsentRequestModel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataConsentRequestsApi
     */
    public createRequest(dataConsentRequestModel?: DataConsentRequestModel, options?: any) {
        return DataConsentRequestsApiFp(this.configuration).createRequest(dataConsentRequestModel, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all Consent Requests.
     * @param {number} [pageNo] 
     * @param {number} [pageSize] 
     * @param {DataConsentStatus} [status] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataConsentRequestsApi
     */
    public getAllConsentRequests(pageNo?: number, pageSize?: number, status?: DataConsentStatus, options?: any) {
        return DataConsentRequestsApiFp(this.configuration).getAllConsentRequests(pageNo, pageSize, status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a Consent Request by ID.
     * @param {string} requestId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataConsentRequestsApi
     */
    public getConsentRequestById(requestId: string, options?: any) {
        return DataConsentRequestsApiFp(this.configuration).getConsentRequestById(requestId, options).then((request) => request(this.axios, this.basePath));
    }
}
