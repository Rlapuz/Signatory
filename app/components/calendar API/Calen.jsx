"use client"

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calen = () => {
  return (
    <>
        <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: 'today prev,next',
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                height="80%"
                themeSystem="tailwind"
        />
    </>
  )
}

export default Calen