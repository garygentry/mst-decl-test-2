import { IApiClientFactory } from './types';
import { IApiStore } from './stores/api';
export declare class ApiClientFactoryProxy implements IApiClientFactory {
    private config;
    private _apiStore;
    constructor(config: any);
    create(): any;
    setApiStore(store: IApiStore): void;
}
export declare const createApiClientFactory: (config: any) => ApiClientFactoryProxy;
