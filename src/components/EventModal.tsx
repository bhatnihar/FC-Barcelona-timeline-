/*import type { EventData } from "../types/Event";

interface EventModalProps {
  event: EventData | null;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>{event.title}</h2>
        <p><b>{event.year}</b></p>
        <p>{event.description}</p>
      </div>
    </div>
  );
}

export default EventModal;*/

/*import type { EventData } from "../types/Event";

interface EventModalProps {
  event: EventData | null;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null; // Prevents rendering when no event is selected

  return (
    <dialog open className="event-modal" role="dialog" aria-modal="true">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}

export default EventModal;*/


import { useEffect, useRef, useCallback } from "react";
import type { EventData } from "../types/Event";
import { getFocusableElements } from "../utils/focus";


interface EventModalProps {
event: EventData | null;
onClose: () => void;
triggerRef?: React.RefObject<HTMLElement | null>;
}


export default function EventModal({ event, onClose, triggerRef }: EventModalProps) {
const dialogRef = useRef<HTMLDialogElement>(null);
const titleId = "event-modal-title";
const descId = "event-modal-desc";


if (!event) return null;


// Open dialog and focus first element
useEffect(() => {
const dialog = dialogRef.current;
if (!dialog) return;


if (!dialog.open) dialog.showModal();
const firstFocusable = getFocusableElements(dialog)[0] || dialog;
requestAnimationFrame(() => firstFocusable.focus());
}, [event]);


// Close on Esc / backdrop click
useEffect(() => {
const dialog = dialogRef.current;
if (!dialog) return;


const handleCancel = (e: Event) => { e.preventDefault(); onClose(); };
const handleClick = (e: MouseEvent) => { if (e.target === dialog) onClose(); };


dialog.addEventListener("cancel", handleCancel);
dialog.addEventListener("mousedown", handleClick);


return () => {
dialog.removeEventListener("cancel", handleCancel);
dialog.removeEventListener("mousedown", handleClick);
};
}, [onClose]);


// Trap focus
const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDialogElement>) => {
if (e.key !== "Tab") return;
const dialog = dialogRef.current;
if (!dialog) return;
const focusables = getFocusableElements(dialog);
if (focusables.length === 0) return;


const first = focusables[0];
const last = focusables[focusables.length - 1];
const current = document.activeElement as HTMLElement;


if (!e.shiftKey && current === last) { e.preventDefault(); first.focus(); }
else if (e.shiftKey && current === first) { e.preventDefault(); last.focus(); }
}, []);


// Return focus to trigger
useEffect(() => {
const dialog = dialogRef.current;
if (!dialog) return;
const onCloseHandler = () => { triggerRef?.current?.focus(); };
dialog.addEventListener("close", onCloseHandler);
return () => dialog.removeEventListener("close", onCloseHandler);
}, [triggerRef]);


return (
<dialog
ref={dialogRef}
role="dialog"
aria-modal="true"
aria-labelledby={titleId}
aria-describedby={descId}
className="rounded-2xl p-0 max-w-2xl w-[90vw]"
onKeyDown={handleKeyDown}
>
<header className="flex items-center justify-between px-4 py-3 border-b">
<h2 id={titleId} className="text-xl font-semibold">{event.title}</h2>
<button onClick={onClose} aria-label="Close dialog" className="px-3 py-1 rounded-xl">✕</button>
</header>


<div id={descId} className="p-4 space-y-3">
{event.year && <p><strong>Year:</strong> {event.year}</p>}
{event.description && <p>{event.description}</p>}
{event.image && <img src={event.image} alt={event.imageAlt ?? event.title} className="rounded-xl" />}
</div>


<footer className="p-4 border-t flex gap-2 justify-end">
<button onClick={onClose} className="px-3 py-2 rounded-xl">Close</button>
</footer>
</dialog>
);
}