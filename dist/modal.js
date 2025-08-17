export function showModal(content) {
    const modal = document.getElementById("modal");
    if (!modal)
        return;
    modal.innerHTML = `
    <div class="modal-content">
      <span id="close">&times;</span>
      ${content}
    </div>
  `;
    modal.style.display = "block";
    const closeBtn = document.getElementById("close");
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };
    }
}
//# sourceMappingURL=modal.js.map