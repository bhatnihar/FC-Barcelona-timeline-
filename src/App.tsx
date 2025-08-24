import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import FilterPanel from "./components/FilterPanel";
import type { EventData } from "./types/Event";

function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // Load events.json on mount
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data: EventData[]) => {
        setEvents(data);
        setFilteredEvents(data);
      });
  }, []);

  // Handle filter by year
  const handleFilter = (year: number | null) => {
    if (year === null) {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((e) => e.year === year));
    }
  };

  return (
    <div>
      <Header />
      <FilterPanel onFilter={handleFilter} />
      <Timeline events={filteredEvents} onSelect={setSelectedEvent} />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default App;
