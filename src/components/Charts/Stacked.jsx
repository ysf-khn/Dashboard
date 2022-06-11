import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  DateTimeCategory,
} from '@syncfusion/ej2-react-charts';

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ height, width }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id='charts'
      // primaryXAxis={stackedPrimaryXAxis}
      // primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject
        servies={[
          StackingColumnSeries,
          Legend,
          Category,
          Tooltip,
          DateTimeCategory,
        ]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
