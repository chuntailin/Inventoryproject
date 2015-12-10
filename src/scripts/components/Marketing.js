import React from 'react';

const styles = {
  wrap: {
    margin: '0 auto',
    width: '1280px',
    height: '600px',
    overflow: 'hidden',
    backgroundColor: '#FFDDAA'
  }
};

const Marketing = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <div id='title'>
          <p>品項</p>
          <p>希望安全存量</p>
        </div>  
      </div>
    )
  }
});

module.exports = Marketing;
