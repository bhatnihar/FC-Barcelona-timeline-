// Fetch events from JSON and render them
fetch("events.json")
  .then(response => response.json())
  .then(events => {
    const timeline = document.getElementById("timeline");

    events.forEach(event => {
      const article = document.createElement("article");
      article.classList.add("event");

      article.innerHTML = `
        <h2>${event.year} - ${event.title}</h2>
        <p>${event.description.substring(0, 80)}...</p>
        <button class="view-details">View Details</button>
      `;

      // Click handler for modal
      article.querySelector(".view-details").addEventListener("click", () => {
        openModal(event);
      });

      timeline.appendChild(article);
    });
  })
  .catch(err => console.error("Error loading events:", err));

// Open modal with event details
function openModal(event) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <div id="modal-content">
      <span id="modal-close">&times;</span>
      <h2>${event.year} - ${event.title}</h2>
      <img src="${event.imageURL}" alt="${event.title}" style="max-width:100%;border-radius:8px;">
      <p>${event.description}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    </div>
  `;
  modal.style.display = "flex";

  // Close modal
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// Close modal function
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
