import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import getAQILevel from 'utils/getAQILevel';
import {
  Sparklines, SparklinesCurve, SparklinesSpots, SparklinesReferenceLine,
} from 'react-sparklines';

const roundAQI = (aqi) => (Math.round(aqi * 100) / 100);

function Card({ city, aqi, onClick }) {
  const status = getAQILevel(roundAQI(aqi));
  const sampleData = useRef([]);
  sampleData.current = useMemo(() => [...sampleData.current, aqi], [aqi]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="d-flex flex-column min-height-100px border-light border-radius-4px box-shadow-blue p-10px min-width-300px w-90-small" onClick={handleClick} aria-hidden>
      <span className="text-bold text-1-2-5em">{city}</span>
      <div className="mt-5px d-flex justify-space-between">
        <span>
          AQI-
          {roundAQI(aqi)}
        </span>
        <span className="text-bold text-blue">{status && status.name}</span>
        <span className={`badge ${(status && status.className) || ''} box-shadow-blue mr-5px`}>&emsp;</span>
      </div>
      <Sparklines limit={50} data={sampleData.current}>
        <SparklinesCurve style={{ fill: 'none' }} />
        <SparklinesSpots />
        <SparklinesReferenceLine
          value={150}
          style={{
            stroke: 'yellow', strokeLinecap: 'round', strokeOpacity: 0.75, strokeDasharray: '2, 2',
          }}
        />
      </Sparklines>
    </div>
  );
}

Card.propTypes = {
  city: PropTypes.string,
  aqi: PropTypes.number,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  city: '',
  aqi: 0,
  onClick: null,
};

export default Card;
