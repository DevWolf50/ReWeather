import React from 'react';
import { css } from 'emotion';
import Search from './Search';

const Home = ({ history }) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 75vh;
    `}
  >
    <h1>#weatherforecast</h1>
    <Search
      onSubmitSearch={(city) => {
        history.push({
          pathname: '/forecast',
          search: `?city=${city}`,
        });
      }}
    />
  </div>
);

export default Home;
