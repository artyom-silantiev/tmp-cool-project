import { addAppModule } from './application';

type LifecycleHandler = () => Promise<void> | void;
type ModuleMeta = {
  items: any[];
  initHandler: LifecycleHandler | null;
  destroyHandler: LifecycleHandler | null;
};
export type ModuleWrap<T> = {
  id: number;
  meta: ModuleMeta;
  module: T;
};

function getModuleSetupCtx(meta: ModuleMeta) {
  return {
    use<T>(factory: () => T) {
      const item = factory();
      meta.items.push(item);
      return item;
    },
    onInit(handler: LifecycleHandler) {
      meta.initHandler = handler;
    },
    onDestroy(handler: LifecycleHandler) {
      meta.destroyHandler = handler;
    },
  };
}
type ModuleSetupCtx = ReturnType<typeof getModuleSetupCtx>;

export type ModuleSetup<T> = (ctx: ModuleSetupCtx) => T;

let modulesCount = 0;
export function define<T>(setup: ModuleSetup<T>) {
  const moduleId = modulesCount++;

  const meta = {
    items: [] as any[],
    initHandler: null as null | { (): Promise<void> },
    destroyHandler: null as null | { (): Promise<void> },
  } as ModuleMeta;

  const moduleCtx = getModuleSetupCtx(meta);

  const moduleWrap = {
    id: moduleId,
    meta,
    module: setup(moduleCtx),
  } as ModuleWrap<T>;

  addAppModule(moduleWrap);

  return moduleWrap.module;
}
