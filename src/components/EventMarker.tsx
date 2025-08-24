import type { EventData } from "../types/Event";

interface EventMarkerProps {
  event: EventData;
  onSelect: (event: EventData) => void;
}

function EventMarker({ event, onSelect }: EventMarkerProps) {
  return (
    <div className="event-marker" onClick={() => onSelect(event)}>
      <span>{event.year}</span>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </div>
  );
}

export default EventMarker;
