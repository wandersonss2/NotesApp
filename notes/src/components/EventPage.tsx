// src/components/EventPage.tsx
import React, { useState } from 'react';
import CreateEvent from './CreateEvent';
import EventList from './EventList';
import UpdateEventForm from './UpdateEventForm';

const EventPage: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const handleUpdate = () => {
    setSelectedEventId(null); // Fechar o formulário de atualização após atualizar
  };

  return (
    <div>
      <h1>Controlador de Eventos</h1>
      <CreateEvent />
      <EventList />
      {selectedEventId && <UpdateEventForm eventId={selectedEventId} onUpdate={handleUpdate} />}
    </div>
  );
};

export default EventPage;
