import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { css } from 'emotion';
import Search from './Search';

const Nav = ({ history }) => (
  <div
    className={css`
      width: 100%;
      display: flex;
    `}
  >
    <ul
      className={css`
        width: 100%;
        display: flex;
        list-style: none;
        padding: 0;
        justify-content: space-between;
      `}
    >
      <li>
        <h1
          className={css`
            font-size: 1.7rem;
          `}
        >
          <Link
            className={css`
              color: rgba(0, 0, 0, 0.8);
              &:hover {
                color: rgba(0, 0, 0, 0.8);
              }
              &:visited {
                color: rgba(0, 0, 0, 0.8);
              }
            `}
            to="/"
          >
            REWeather
          </Link>
        </h1>
      </li>
      <li>
        <Search
          onSubmitSearch={function (city) {
            history.push({
              pathname: '/forecast',
              search: `?city=${city}`,
            });
          }}
        />
      </li>
    </ul>
  </div>
);

export default withRouter(Nav);
