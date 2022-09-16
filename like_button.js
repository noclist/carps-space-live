'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        'i',
        { className: 'fas fa-thumbs-down', onClick: () => this.setState({ liked: false }) },
      );

    }


    return e(
      'i',
      { className: 'fas fa-thumbs-up', onClick: () => this.setState({ liked: true }) },
    );

  }
}

const domContainer = document.querySelector('#like');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));