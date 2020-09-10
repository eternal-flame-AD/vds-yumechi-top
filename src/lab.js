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

export const TopCaption = ({children, text}) => (
  <span>
    <p style={{
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "bold",
    }} >
      { text }
    </p>
    { children }
  </span>
)

export const BottomCaption = ({children, text}) => (
  <span>
  { children }
    <p style={{
      textAlign: "center",
      fontStyle: "italic",
    }} >
      { text }
    </p>
  </span>

)

export const ZincImg = ({id}) => <img src={`http://zinc.docking.org/substances/ZINC0000${id}.png`} height={200} width={200} style={{border: "2px solid"}} />

export const SmileImg = ({smiles}) => <img src={"http://zinc.docking.org/apps/mol/draw.png?smiles=" + encodeURIComponent(smiles)} height={200} width={200} style={{border: "2px solid"}} />