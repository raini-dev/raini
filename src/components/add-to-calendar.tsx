import React, { FC } from "react";
import { IEvent } from "../models/event";

interface IAddToCalendarProps {
  event: IEvent;
}

export const AddToCalendar: FC<IAddToCalendarProps> = ({ event }) => (
  <div title="Add to Calendar" className="addeventatc">
    Add to Calendar
    <span className="start">{event.start}</span>
    <span className="end">{event.end}</span>
    <span className="timezone">{event.timezone}</span>
    <span className="title">{`Raini.dev - ${event.title}`}</span>
    <span className="description">{event.excerpt}</span>
    <span className="location">{event.location}</span>
  </div>
);
