import type { EventData } from "../types/Event";

interface EventModalProps {
  event: EventData;
  onClose: () => void;
}

function EventModal({ event, onClose }: EventModalProps) {
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

export default EventModal;
