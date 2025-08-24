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
      <img src={event.image} alt={event.imageAlt} style={{ width: "400px", height: "300px", objectFit: "cover" }}/>
      <p>{event.description}</p>
    </div>
  );
}

export default EventMarker;
