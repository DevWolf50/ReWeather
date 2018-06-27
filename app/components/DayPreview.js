import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { css } from 'emotion';

const DayPreview = ({ icon, main, date }) => (
  <div className="dayContainer">
    <img
      className={css`
        width: 4.5rem;
        margin-bottom: 1rem;
      `}
      src={require(`../images/${icon}.svg`)}
      alt={main}
    />
    <h2
      className={css`
        font-size: 1rem;
      `}
    >
      {moment.unix(date).format('ddd, MMM Do')}
    </h2>
  </div>
);

DayPreview.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  main: PropTypes.string.isRequired,
};

export default DayPreview;
