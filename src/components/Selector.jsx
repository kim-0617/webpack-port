import React, { forwardRef } from 'react';
import { Standard, Responsive, Effect, Game, Php, VueSite, ReactSite } from '../stack';

function Selector({ value }, ref) {
  switch (value) {
    case 'Standard':
      return <Standard ref={ref} />;
    case 'Responsive':
      return <Responsive ref={ref} />;
    case 'Effect':
      return <Effect ref={ref} />;
    case 'Game':
      return <Game ref={ref} />;
    case 'Php':
      return <Php ref={ref} />;
    case 'VueSite':
      return <VueSite ref={ref} />;
    case 'ReactSite':
      return <ReactSite ref={ref} />;
    default:
      return <Standard ref={ref} />;
  }
}

export default forwardRef(Selector);
