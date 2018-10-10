import { IApiClientFactory } from './types';
import { IApiStore } from './stores/api';

// a proxy object to allow consumers to get access to the api (via the api store)
// without needing to get a reference to it (and having to find and pass user auth data in)
// allows for being injected into stores, and accessible to stores that might get detached from root (but still have access to env)
export class ApiClientFactoryProxy implements IApiClientFactory {
    private _apiStore: IApiStore;

    constructor(private config: any) {}

    public create(): any {
        if (!this._apiStore) {
            throw new Error('Cannot create client.  ApiStore is not initialized.');
        }
        return this._apiStore!.createClient();
    }

    public setApiStore(store: IApiStore) {
        this._apiStore = store;
    }
}

export const createApiClientFactory = (config: any) => {
    return new ApiClientFactoryProxy(config);
};
