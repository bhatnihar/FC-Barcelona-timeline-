import EventMarker from "./EventMarker";
import type { EventData } from "../types/Event";

interface TimelineProps {
  events: EventData[];
  onSelect: (event: EventData) => void;
}

function Timeline({ events, onSelect }: TimelineProps) {
  return (
    <div className="timeline">
      {events.map((event) => (
        <EventMarker key={event.id} event={event} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default Timeline;

