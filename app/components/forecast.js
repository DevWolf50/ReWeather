import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import getWeather from '../utils/api';
import DayPreview from './DayPreview';
import Loading from './Loading';
import { css } from 'emotion';

class Forecast extends React.Component {
  state = {
    days: [],
    city: '',
    error: null,
    loading: true,
  };

  componentDidMount = async () => {
    const { city } = queryString.parse(this.props.location.search);

    try {
      const { list: days } = await getWeather(city);
      this.setState(() => ({ days, city, loading: false }));
    } catch ({ message }) {
      this.setState(() => ({ error: message, loading: false }));
    }
  };

  componentWillReceiveProps = async (nextProps) => {
    const { city } = queryString.parse(nextProps.location.search);

    const { list: days } = await getWeather(city);
    this.setState(() => ({
      days,
      city,
      error: null,
      loading: false,
    }));
  };

  render = () => {
    const { city, error, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div className={css``}>
        <ul
          className={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            list-style: none;
            padding: 0;
          `}
        >
          {this.state.days.map((day) => {
            const {
              dt,
              weather: [{ icon, main }],
            } = day;
            return (
              <li
                key={dt}
                className={css`
                  width: 45%;
                  margin-bottom: 1rem;
                  padding: 1rem;
                  border-radius: 8px;
                  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
                  height: 10rem;
                  text-align: center;
                `}
              >
                <Link
                  className={css`
                    color: #000;
                    font-size: 1rem;
                  `}
                  to={{
                    pathname: `/details/${city}`,
                    state: { day },
                  }}
                >
                  <DayPreview icon={icon} date={dt} main={main} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
}

export default Forecast;
