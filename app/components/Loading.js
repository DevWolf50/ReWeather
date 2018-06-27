import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  };

  static defaultProps = {
    text: 'loading',
    speed: 300,
  };

  state = {
    text: this.props.text,
  };

  componentDidMount = () => {
    const { text } = this.state.text;

    const stopper = `${text}...`;
    this.interval = window.setInterval(() => {
      if (text === stopper) {
        this.setState(() => ({ text: this.props.text }));
      } else {
        this.setState(prev => ({ text: `${prev}.` }));
      }
    }, this.props.speed);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  };

  render = () => (
    <div>
      <p>{this.state.text}</p>
    </div>
  );
}

export default Loading;
