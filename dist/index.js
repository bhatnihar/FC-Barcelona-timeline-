import { getEvents } from "./fetcher.js";
import { renderEvents } from "./renderer.js";
import { showModal } from "./modal.js";
const events = getEvents();
renderEvents(events);
// Example: clicking on first event opens modal
setTimeout(() => {
    showModal("<h2>Welcome!</h2><p>This is the timeline modal example.</p>");
}, 1000);
//# sourceMappingURL=index.js.map