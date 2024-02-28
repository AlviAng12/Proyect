import { useEffect, useReducer } from 'react';
import * as dayjsLocale from 'dayjs/locale/en';
import * as antdLocale from 'antd/locale/en_US';
import 'react-big-schedule/dist/css/style.css';

import { Scheduler, SchedulerData, ViewType, wrapperFun,SummaryPos,summary} from 'react-big-schedule';
import DemoDataa from 'react-big-schedule/dist/sample-data/sample1.js';

let schedulerData;

const initialState = {
  showScheduler: false,
  viewModel: {},
  selectedAreas: [],
};


const fechaActual = new Date();
const fechaFormateada = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${fechaActual.getDate().toString().padStart(2, '0')}`;
function reducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE':
      return { showScheduler: true, viewModel: action.payload };
    case 'UPDATE_SCHEDULER':
      return { ...state, viewModel: action.payload };
    case 'REINITIALIZE':
      return { ...state, showScheduler: false };
    default:
      return state;
  }
}

function Calendar({sites}) {
 
  if (sites && !(sites.length === 0)) {
    // Puedes devolver un mensaje de error o algún componente indicando que no hay datos
    
  
    // Resto del código para mapear y procesar 'sites' si existe

    const resources = sites.map(resource => ({
      id: resource.id,
      name: resource.name
    }));


  // Resto del código para mapear y procesar 'sites' si existe



  const [state, dispatch] = useReducer(reducer, initialState);

  
//? PAPU RECUERDALO, PARA CAMBIAR LA VISTA, LO QUE DEBES HACER ES MANIPULAR LOS RECURSOS, DE ESA MANERA ABSOLUTAMENTE TODO CAMBIARÁ
//! QUE POR CADA CUSTOMER, HAYA UN RECURSO DIFERENTE

  useEffect(() => {
    schedulerData = new SchedulerData(fechaFormateada, ViewType.Week, false, false, {
      besidesWidth: window.innerWidth <= 1600 ? 150 : 350,
      dayMaxEvents: 99,
      weekMaxEvents: 9669,
      monthMaxEvents: 9669,
      quarterMaxEvents: 6599,
      yearMaxEvents: 9956,
      customMaxEvents: 9965,
      eventItemPopoverTrigger: 'hover',
      schedulerContentHeight: '100%',
    
      
    
    });
    schedulerData.setSchedulerLocale(dayjsLocale);
    schedulerData.setCalendarPopoverLocale(antdLocale);
    schedulerData.setResources(resources);
    schedulerData.setEvents([{
      id: 1,
      start: '2024-02-19 09:30:00',
      end: '2024-02-19 23:30:00',
      resourceId: 1,
      title: 'I am finished',
      bgColor: '#D9D9D9',
      showPopover: false
    }]);

    dispatch({ type: 'INITIALIZE', payload: schedulerData });

    return () => dispatch({ type: 'REINITIALIZE' });
  },[]);

  useEffect(() => {
    schedulerData.setResources(resources);
    schedulerData.setEvents([{
      id: 1,
      start: '2024-02-19 09:30:00',
      end: '2024-02-19 23:30:00',
      resourceId: 1,
      title: 'I am finished',
      bgColor: '#D9D9D9',
      showPopover: false
    }]);

    dispatch({ type: 'INITIALIZE', payload: schedulerData });

    return () => dispatch({ type: 'REINITIALIZE' });
  },[sites]);

  const prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(DemoDataa.events);
    dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
  };

  const nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(DemoDataa.events);
    dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
  };

  const onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoDataa.events);
  
    dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
  };

  const onViewChange = (schedulerData, view) => {
    const start = new Date();

    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(DemoDataa.events);
    dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });

    const secondsBetween = (date1, date2) => {
      const diff = Math.abs(date1.getTime() - date2.getTime());
      return diff / 1000;
    };
    console.log('Elapsed seconds: ' + secondsBetween(start, new Date()));
  };

  const ops1 = (schedulerData, event) => {
    alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  const ops2 = (schedulerData, event) => {
    alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  const updateEventStart = (schedulerData, event, newStart) => {
    if (confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
      schedulerData.updateEventStart(event, newStart);
    }
    dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
  };

  const updateEventEnd = (schedulerData, event, newEnd) => {
    if (confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
  };

  const moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
    }
  };

  const newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {

    if (confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)) {
      let newFreshId = 0;
      
      schedulerData.events.forEach(item => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: 'New event you just created',
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: 'purple',
      };

      schedulerData.addEvent(newEvent);
      dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
    }
  };

  const onScrollLeft = (schedulerData, schedulerContent) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.prev();
      schedulerData.setEvents(DemoDataa.events);
      dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
      schedulerContent.scrollLeft = 10;
    }
  };
  const onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.next();
      schedulerData.setEvents(DemoDataa.events);
      dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });
      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  const onScrollTop = () => console.log('onScrollTop');

  const onScrollBottom = () => console.log('onScrollBottom');

  const toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    dispatch({ type: 'UPDATE_SCHEDULER', payload: schedulerData });

  }



  return (
    <>

      {state.showScheduler && (
        <Scheduler
          schedulerData={state.viewModel}
          prevClick={prevClick}
          nextClick={nextClick}
          onSelectDate={onSelectDate}
          onViewChange={onViewChange}
          viewEventClick={ops1}
          viewEventText="Ops 1"
          viewEvent2Text="Ops 2"
          viewEvent2Click={ops2}
          updateEventStart={updateEventStart}
          updateEventEnd={updateEventEnd}
          moveEvent={moveEvent}
          newEvent={newEvent}
          onScrollLeft={onScrollLeft}
          onScrollRight={onScrollRight}
          onScrollTop={onScrollTop}
          onScrollBottom={onScrollBottom}
          toggleExpandFunc={toggleExpandFunc}
      
        />
      )}
    </>
  );
      }
}

export default wrapperFun(Calendar);