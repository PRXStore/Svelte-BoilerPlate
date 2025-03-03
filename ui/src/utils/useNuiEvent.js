import { onDestroy } from "svelte";



const eventListeners = new Map();

const eventListener = (event) => {
  const { action, data } = event.data;
  const handlers = eventListeners.get(action);

  if (handlers) {
    handlers.forEach((handler) => handler(data));
  }
};

window.addEventListener("message", eventListener);


export function useNuiEvent(
  action,
  handler
) {
  const handlers = eventListeners.get(action) || [];
  handlers.push(handler);
  eventListeners.set(action, handlers);

  onDestroy(() => {
    const handlers = eventListeners.get(action) || [];

    eventListeners.set(
      action,
      handlers.filter((h) => h !== handler)
    );
  });
}
