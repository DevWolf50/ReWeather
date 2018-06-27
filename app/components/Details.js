import React from 'react';
import PropTypes from 'prop-types';
import DayPreview from './DayPreview';
import { css } from 'emotion';

const kTO = kNum => kNum * (9 / 5) - 459.6;

const Description = ({
  city, description, min, max, humidity,
}) => (
  <div>
    <p>{city}</p>
    <p>{description}</p>
    <p>{`min temp: ${Math.round(kTO(min))} degrees`}</p>
    <p>{`max temp: ${Math.round(kTO(max))} degrees`}</p>
    <p>{`humidity: ${humidity}`}</p>
  </div>
);

Description.propTypes = {
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
};

const Details = (props) => {
  const {
    location: {
      state: {
        day: {
          dt,
          weather: [{ main, icon, description }],
          temp: { min, max },
          humidity,
        },
      },
    },
    match: {
      params: { city },
    },
  } = props;
  return (
    <div
      className={css`
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      `}
    >
      <DayPreview icon={icon} main={main} date={dt} />
      <Description
        {...{
          city,
          description,
          min,
          max,
          humidity,
        }}
      />
    </div>
  );
};

export default Details;
