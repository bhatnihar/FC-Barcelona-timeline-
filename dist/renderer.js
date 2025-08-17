export function renderEvents(events) {
    const timeline = document.getElementById("timeline");
    if (!timeline)
        return;
    timeline.innerHTML = ""; // clear old content
    events.forEach((event) => {
        const div = document.createElement("div");
        div.className = "event";
        div.innerHTML = `
      <h3>${event.year} - ${event.title}</h3>
      <p>${event.description}</p>
      ${event.image ? `<img src="${event.image}" alt="${event.title}" width="200">` : ""}
    `;
        timeline.appendChild(div);
    });
}
//# sourceMappingURL=renderer.js.map