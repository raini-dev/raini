import React, { FC } from "react";
import { IEvent } from "../types/event";

interface IAddToCalendarProps {
  event: IEvent;
}

export const AddToCalendar: FC<IAddToCalendarProps> = ({ event }) => (
  <div title="Add to Calendar" className="addeventatc">
    Add to Calendar
    <span className="start">{event.frontmatter.start}</span>
    <span className="end">{event.frontmatter.end}</span>
    <span className="timezone">{event.frontmatter.timezone}</span>
    <span className="title">{`Raini.dev - ${event.frontmatter.title}`}</span>
    <span className="description">{event.excerpt}</span>
    <span className="location">{event.frontmatter.location}</span>
  </div>
);
