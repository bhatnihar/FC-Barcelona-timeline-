/*import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import FilterPanel from "./components/FilterPanel";
import "./styles/accessibility.css";
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

export default App;*/

/*import { useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import FilterPanel from "./components/FilterPanel";
import type { EventData } from "./types/Event";

// Example data (replace with your actual JSON or fetched data)
const allEvents: EventData[] = [
  { id: 1, year: 2000, title: "Event in 2000", description: "Description A" },
  { id: 2, year: 2010, title: "Event in 2010", description: "Description B" },
  { id: 3, year: 2020, title: "Event in 2020", description: "Description C" },
];

function App() {
  const [events] = useState<EventData[]>(allEvents);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [filterYear, setFilterYear] = useState<number | null>(null);

  // Filter logic
  const filteredEvents = filterYear
    ? events.filter((event) => event.year === filterYear)
    : events;

  return (
    <div className="app">
      <Header />
      <FilterPanel onFilter={setFilterYear} />
      <Timeline
        events={filteredEvents}
        onSelect={(event: EventData) => setSelectedEvent(event)}
      />
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}

export default App;*/

/*import { useState, useRef } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import FilterPanel from "./components/FilterPanel";
import type { EventData } from "./types/Event";
import "./styles/accessibility.css";
import "./App.css"
 

// Example events (replace with actual data)
const allEvents: EventData[] = [
{ id: 1, year: 2000, title: "Event in 2000", description: "Description A", image: "", imageAlt: "" },
{ id: 2, year: 2010, title: "Event in 2010", description: "Description B", image: "", imageAlt: ""},
{ id: 3, year: 2020, title: "Event in 2020", description: "Description C", image: "", imageAlt: ""},
];


function App() {
const [events] = useState<EventData[]>(allEvents);
const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
const [filterYear, setFilterYear] = useState<number | null>(null);
const triggerRef = useRef<HTMLElement | null>(null);


const filteredEvents = filterYear
? events.filter((event) => event.year === filterYear)
: events;


const openModal = (event: EventData, triggerEl?: HTMLElement) => {
setSelectedEvent(event);
if (triggerEl) triggerRef.current = triggerEl;
};


const closeModal = () => setSelectedEvent(null);


return (
<>
<a href="#main" className="skip-link">Skip to main content</a>
<Header />


<main id="main" role="main" aria-label="Main content" className="container mx-auto px-4">
<FilterPanel onFilter={setFilterYear} />


<Timeline
events={filteredEvents}
onSelect={(event: EventData, triggerEl?: HTMLElement) => openModal(event, triggerEl)}
/>


<EventModal
event={selectedEvent}
onClose={closeModal}
triggerRef={triggerRef}
/>
</main>
</>
);
}


export default App;*/

import { useState, useRef } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import FilterPanel from "./components/FilterPanel";
import type { EventData } from "./types/Event";
import eventsData from "./events.json"; // ✅ import JSON
import "./styles/accessibility.css";
import "./App.css"

function App() {
  
  const [events] = useState<EventData[]>(eventsData as EventData[]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const filteredEvents = filterYear
    ? events.filter((event) => event.year === filterYear)
    : events;

  const openModal = (event: EventData, triggerEl?: HTMLElement) => {
    setSelectedEvent(event);
    if (triggerEl) triggerRef.current = triggerEl;
  };

  const closeModal = () => setSelectedEvent(null);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main" role="main" aria-label="Main content" className="container mx-auto px-4">
        <FilterPanel onFilter={setFilterYear} />
        <Timeline
          events={filteredEvents}
          onSelect={(event: EventData, triggerEl?: HTMLElement) => openModal(event, triggerEl)}
        />
        <EventModal
          event={selectedEvent}
          onClose={closeModal}
          triggerRef={triggerRef}
        />
      </main>
    </>
  );
}

export default App;
