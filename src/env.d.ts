/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />



type AlpineWatch = (targetProperty: string, callback: ((newValue: any, oldValue?: any) => void)) => void;

type AlpineMagicProperties<AlpineGlobalStore = Record<string, V>> = {
  $el?: HTMLElement;
  $refs?: { [xRefId: string]: HTMLElement };
  $watch?: AlpineWatch;
  $nextTick?: (functionToCall: (() => void)) => void;
  $store?: AlpineGlobalStore;
  $dispatch?: <T = any>(eventName: string, eventDetail?: T) => void;
};

type AlpineMandatoryProps = {
  init?: () => void,
}

declare type AlpineComponent<Props extends BaseAlpineProps, AlpineGlobalStore = {}> = {
  (...args: any[]): AlpineMandatoryProps & Props & AlpineMagicProperties<AlpineGlobalStore>;
};

interface BaseAlpineProps {
  init?: (() => void) | (() => Promise<void>);
}

interface AlpineRoot {
  store,
  start,
  directive,
  version: string,
}

declare module "alpinejs" {
  type AlpineDirectiveCallback = (p1: HTMLElement, p2: any, p3: any) => void;
  type AlpineRootCallback = ((alpineRoot: Alpine) => void);
  function store<R>(storeName: string, value: R): void;
  function store<R>(storeName: string): R;
  function directive(directiveName: string, cb: AlpineDirectiveCallback);
  function plugin(alpineRootCallBack: AlpineRootCallback): void;
  function data(dataName: string, dataInitializer: () => Record<string, V>): void;
  function effect(effectCallback: () => void): void;
  function reactive<T>(initialData: Record<string, T>): Record<string, T>;
  function magic(magicName: string, callback: (el: HTMLElement, alpineObj: { Alpine: Alpine }) => any): void;
  function start(): void;
  function raw(v: any): any;

  export default Alpine = {
    version: string,
    store,
    start,
    directive,
    plugin,
    data,
    effect,
    reactive,
    magic,
    raw
  };

}