import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class Search extends React.Component {
  static propTypes = {
    onSubmitSearch: PropTypes.func.isRequired,
  };
  state = {
    location: '',
  };

  handleChange = (event) => {
    const {
      target: { value },
    } = event;
    return this.setState(() => ({ location: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitSearch(this.state.location);

    this.setState(() => ({ location: '' }));
  };

  render() {
    return (
      <div className="Container">
        <form
          className={css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          `}
        >
          <input
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Temecula, California"
            className={css`
              border: 1px solid #000;
              padding: 0.25rem 0.5rem;
              margin-bottom: 0.5rem;
            `}
          />
          <button
            onClick={this.handleSubmit}
            className={css`
              padding: 0.375rem 0.75rem;
              border-radius: 0.25rem;
              text-align: center;
              vertical-align: middle;
              line-height: 1.5;
              background-color: rgba(0, 0, 0, 0.85);
              color: #fff;
              &:hover {
                color: #fff;
              }
              &:visited {
                color: #fff;
              }
            `}
          >
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
