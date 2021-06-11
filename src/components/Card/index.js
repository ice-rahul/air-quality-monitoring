import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import getAQILevel from 'utils/getAQILevel';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const roundAQI = (aqi) => (Math.round(aqi * 100) / 100);

function Card({ city, aqi }) {
  const status = getAQILevel(roundAQI(aqi));
  const sampleData = useRef([]);
  sampleData.current = useMemo(() => [...sampleData.current, aqi], [aqi]);
  return (
    <div className="d-flex flex-column min-height-100px border-light border-radius-4px box-shadow-blue p-10px min-width-300px">
      <span className="text-bold text-1-2-5em">{city}</span>
      <div className="mt-5px d-flex justify-space-between">
        <span>
          AQI-
          {roundAQI(aqi)}
        </span>
        <span className={`badge ${(status && status.className) || ''} box-shadow-blue mr-5px`}>&emsp;</span>
      </div>
      <Sparklines data={sampleData.current}>
        <SparklinesLine style={{ fill: 'none' }} />
        <SparklinesSpots />
      </Sparklines>
    </div>
  );
}

Card.propTypes = {
  city: PropTypes.string,
  aqi: PropTypes.number,
};

Card.defaultProps = {
  city: '',
  aqi: 0,
};

export default Card;
