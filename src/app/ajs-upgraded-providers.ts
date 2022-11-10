import { InjectionToken } from "@angular/core";

export const Toaster = new InjectionToken("Toaster");

export function toasterServiceFactory(i: any) {
    return i.get('toaster');
}

export const toasterServiceProvider = {
    provide: Toaster,
    useFactory: toasterServiceFactory,
    deps: ['$injector'],
}

export const UIRouterState = new InjectionToken("UIRouterState");

export function uiRouterStateServiceFactory(i: any) {
    return i.get('$state');
}

export const uiRouterStateServiceProvider = {
    provide: UIRouterState,
    useFactory: uiRouterStateServiceFactory,
    deps: ['$injector'],
}

export const UIRouterStateParams = new InjectionToken("UIRouterStateParams");

export function uiRouterStateParamsServiceFactory(i: any) {
    return i.get('$stateParams');
}

export const uiRouterStateParamsServiceProvider = {
    provide: UIRouterStateParams,
    useFactory: uiRouterStateParamsServiceFactory,
    deps: ['$injector'],
}
