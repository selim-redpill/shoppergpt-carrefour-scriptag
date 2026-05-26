import { h, render } from "preact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Widget } from "./components/Widget";
import { AssistantExperience } from "./components/assistant/AssistantExperience";
import { initDOMEventListeners } from "./events";
import styles from "./styles/tailwind.css";
import satisfyWoff2 from "./assets/fonts/Satisfy-Regular.woff2";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, staleTime: 30_000 } },
});

// @font-face must live in document.head — Shadow DOM doesn't resolve it
function injectDocumentFonts() {
  if (document.getElementById("sgpt-fonts")) return;
  const style = document.createElement("style");
  style.id = "sgpt-fonts";
  style.textContent = `
    @font-face {
      font-family: "Satisfy";
      src: url("${satisfyWoff2}") format("woff2");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

function injectStyles(shadow: ShadowRoot) {
  const styleEl = document.createElement("style");
  styleEl.textContent = styles as unknown as string;
  shadow.appendChild(styleEl);
}

function bootstrap() {
  injectDocumentFonts();
  initDOMEventListeners();

  // Embedded chat mode: host page provides a <div id="shoppergpt-chat"> mount point
  const embeddedChatMount = document.getElementById("shoppergpt-chat");
  if (embeddedChatMount) {
    const shadow = embeddedChatMount.attachShadow({ mode: "open" });
    injectStyles(shadow);
    const mountPoint = document.createElement("div");
    mountPoint.style.cssText = "height:100%;display:flex;flex-direction:column;";
    shadow.appendChild(mountPoint);
    render(
      h(QueryClientProvider, { client: queryClient }, h(AssistantExperience, null)),
      mountPoint
    );
    console.log("[ShopperGPT] Embedded chat mode mounted");
    return;
  }

  // Floating widget mode: inject FAB into page
  const host = document.createElement("div");
  host.id = "shoppergpt-root";
  document.body.appendChild(host);
  const shadow = host.attachShadow({ mode: "open" });
  injectStyles(shadow);
  const mountPoint = document.createElement("div");
  shadow.appendChild(mountPoint);
  render(
    h(QueryClientProvider, { client: queryClient }, h(Widget, null)),
    mountPoint
  );
  console.log("[ShopperGPT] Floating widget mounted");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
