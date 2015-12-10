import React from 'react';

const styles = {
  wrap: {
    margin: '0 auto',
    width: '100%',
    height: '600px',
    overflow: 'hidden',
    backgroundColor: '#FFDDAA'
  },
  divA:{
    display: 'flex',
    backgroundColor: '#444444',
    opacity: '0.5',
    height: '80px'
  },
  divB:{
    display: 'flex',
    backgroundColor: '#E6E6FA',
    opacity: '0.5',
    height: '80px'
  },
  nameA:{
    flex: 1,
    color: '#CCDDFF',
    textAlign: 'center'
  },
    nameB:{
    flex: 1,
    color: '#483D8B',
    textAlign: 'center'
  },
  input:{
    flex:1
  },
  button:{
    flex: 1,
    color: '#666666',
    fontSize: '2em'
  },
  blankDiv:{
    flex:1
  }
};

const Inventory = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <div>
          <p> 品項&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望安全存量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存貨狀態&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存貨數量 </p>     
        </div>

        <div id='noodle' style={styles.divA}>
          <h2 style={styles.nameA}> 麵粉 </h2>
          <input style={styles.input}></input>
          <button style={styles.button}>確認</button>
          <div style={styles.blankDiv}></div>
          <div style={styles.blankDiv}></div>
        </div>
        <div id='mother' style={styles.divB}>
          <h2 style={styles.nameB}> 酵母 </h2>
          <input style={styles.input}></input>
          <button style={styles.button}>確認</button>
          <div style={styles.blankDiv}></div>
          <div style={styles.blankDiv}></div>
        </div>
        <div id='egg' style={styles.divA}>
          <h2 style={styles.nameA}> 雞蛋 </h2>
          <input style={styles.input}></input>
          <button style={styles.button}>確認</button>
          <div style={styles.blankDiv}></div>
          <div style={styles.blankDiv}></div>
        </div>
        <div id='sugar' style={styles.divB}>
          <h2 style={styles.nameB}> 糖 </h2>
          <input style={styles.input}></input>
          <button style={styles.button}>確認</button>
          <div style={styles.blankDiv}></div>
          <div style={styles.blankDiv}></div>
        </div>
        <div id='milk' style={styles.divA}>
          <h2 style={styles.nameA}> 牛奶 </h2>
          <input style={styles.input}></input>
          <button style={styles.button}>確認</button>
          <div style={styles.blankDiv}></div>
          <div style={styles.blankDiv}></div>
        </div>
      </div>
    )
  }
});

module.exports = Inventory;
