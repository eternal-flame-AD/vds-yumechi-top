import React from 'react';

export const Timestamp = ({children, color}) => ( <span style={{
    backgroundColor: color,
    borderRadius: '2px',
    color: '#fff',
    padding: '0.2rem',
  }}><i className="fas fa-clock"></i> {children}</span> );

export const Date = ({children, color}) => ( <span style={{
    backgroundColor: color,
    borderRadius: '2px',
    color: '#fff',
    padding: '0.2rem',
  }}><i className="fas fa-calendar-day"></i> {children}</span> );

export const Prepared = ({children, color}) => ( <span style={{
    backgroundColor: color,
    borderRadius: '2px',
    color: '#fff',
    padding: '0.2rem',
  }}><i className="fas fa-vials"></i> Already done by mentors.</span> );

export const Measure = ({children, unit}) => {
  const unitFormatData = {
    "um": "μM",
    "ul": "μL",
    "ml": "mL",
    "degc": "°C",
  }
  const formatUnit = (unit) => {
    let NewUnit = unit;
    for (let origUnit in unitFormatData) {
      if (unit.toLowerCase() == origUnit.toLowerCase()) {
        NewUnit = unitFormatData[origUnit];
      }
    }
    return NewUnit;
  }
  let subUnits = unit.split("/");
  subUnits = subUnits.map(formatUnit);

  return (<span>{children} {subUnits.join("/")}</span>);
}
