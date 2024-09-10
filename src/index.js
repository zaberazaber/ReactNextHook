/*
 * This code imports all of the hooks in the hooks directory, and exports them.
 * It also exports the dispatch function from use-event-bus.js.
 * This file is used by the build system to create an entry point for the hooks.
 */


export { default as useLocalStorage } from './hooks/use-local-storage/index.js';
export { useOutsideClickEvent } from './hooks/use-click-outside-event.js'
export { useDebug } from './hooks/use-debug.js'
export { useDocumentReadyState } from './hooks/use-document-ready-state.js'
export { useInterval } from './hooks/use-interval.js'
export { useIsClient } from './hooks/use-is-client.js'
export { useIsTouchDevice } from './hooks/use-is-touch-device.js'
export { useMediaQuery } from './hooks/use-media-query.js'
export { useResizeObserver } from './hooks/use-resize-observer/index.js'
export { useSlots } from './hooks/use-slots.js'
export { useWindowSize } from './hooks/use-window-size/index.js'
export { useLazyState } from './hooks/use-lazy-state/index.js'
export { useTimeout } from './hooks/use-timeout/index.js'
export { useObjectFit } from './hooks/use-object-fit/index.js'
