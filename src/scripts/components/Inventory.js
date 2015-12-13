import React from 'react';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

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
    textAlign: 'center',
    fontSize:'2em'
  },
    nameB:{
    flex: 1,
    color: '#483D8B',
    textAlign: 'center',
    fontSize:'2em'
  },
  input:{
    flex:1,
    textAlign:'center',
    fontSize:'1.5em'
  },
  button:{
    flex: 1,
    color: '#666666',
    fontSize: '1.5em'
  },
  blankDiv:{
    flex:1
  }
};

const Inventory = React.createClass({

  getInitialState(){
    var materials = {
      noodle: '',
      mother: '',
      egg: '',
      sugar: '',
      milk: '',
      inventoryNoodle: '',
      inventoryMother: '',
      inventoryEgg: '',
      inventorySugar: '',
      inventoryMilk: '',
      noodleState: '',
      motherState: '',
      eggState: '',
      sugarState: '',
      milkState: ''
    };
    return materials;
  },

  componentDidMount(){
    AuthStore.addChangeListener(this.materialUpdate)
  },

  componentWillUnmount(){
    AuthStore.removeChangeListener(this.materialUpdate)
  },

  materialUpdate(){
    this.setState({
      noodle: this.state.noodle,
      mother: this.state.mother,
      egg: this.state.egg,
      sugar: this.state.sugar,
      milk: this.state.milk
    });
  },

  _onNoodleChange(e){
    this.setState({
      noodle: e.target.value
    });
  },

  _onMotherChange(e){
    this.setState({
      mother: e.target.value
    });
  },

  _onEggChange(e){
    this.setState({
      egg: e.target.value
    });
  },

  _onSugarChange(e){
    this.setState({
      sugar: e.target.value
    });
  },

  _onMilkChange(e){
    this.setState({
      milk: e.target.value
    });
  },

  _onNoodleSubmit(){
    AuthActions.matchNoodle(this.state.noodle);

    this.setState({
      noodle: this.state.noodle,
      inventoryNoodle: AuthStore.getNoodle(),
      noodleState: AuthStore.matchNoodle(this.state.noodle)
    });
  },

  _onMotherSubmit(){
    AuthActions.matchMother(this.state.mother);

    this.setState({
      mother: this.state.mother,
      inventoryMother: AuthStore.getMother(),
      motherState: AuthStore.matchMother(this.state.mother)
    });
  },

  _onEggSubmit(){
    AuthActions.matchEgg(this.state.egg);

    this.setState({
      egg: this.state.egg,
      inventoryEgg: AuthStore.getEgg(),
      eggState: AuthStore.matchEgg(this.state.egg)
    });
  },

  _onSugarSubmit(){
    AuthActions.matchSugar(this.state.sugar);

    this.setState({
      sugar: this.state.sugar,
      inventorySugar: AuthStore.getSugar(),
      sugarState: AuthStore.matchSugar(this.state.sugar)
    });
  },

  _onMilkSubmit(){
    AuthActions.matchMilk(this.state.milk);

    this.setState({
      milk: this.state.milk,
      inventoryMilk: AuthStore.getMilk(),
      milkState: AuthStore.matchMilk(this.state.milk)
    });
  },

  render() {
    return (
      <div style={styles.wrap}>
        <div style={{display:'flex'}}>
          <div style={{'flex':1, paddingLeft:'100px',fontSize:'1.2em',fontFamily:'impact',color:'#800000'}}>
            <p> 品項 </p>
          </div>
          <div style={{'flex':1, paddingLeft:'60px', fontSize:'1.2em',fontFamily:'impact',color:'#800000'}}>
            <p> 希望安全存量 </p>
          </div>
          <div style={{'flex':1, paddingLeft:'370px', fontSize:'1.2em',fontFamily:'impact',color:'#800000'}}>
            <p> 存貨狀態 </p>
          </div>
          <div style={{'flex':1, paddingLeft:'90px', fontSize:'1.2em',fontFamily:'impact',color:'#800000'}}>
            <p> 存貨數量 </p>
          </div>
        </div>

        <div id='noodle' style={styles.divA}>
          <h2 style={styles.nameA}> 麵粉 </h2>
          <input style={styles.input} onChange={this._onNoodleChange} value={this.state.noodle}></input>
          <button style={styles.button} onClick={this._onNoodleSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h1 style={{textAlign:'center'}}> {this.state.noodleState} </h1>
          </div>
          <div style={styles.blankDiv}>
            <h1 style={{textAlign:'center'}}>{this.state.inventoryNoodle}</h1>
          </div>
        </div>

        <div id='mother' style={styles.divB}>
          <h2 style={styles.nameB}> 酵母 </h2>
          <input style={styles.input} onChange={this._onMotherChange} value={this.state.mother}></input>
          <button style={styles.button} onClick={this._onMotherSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h1> {this.state.motherState} </h1>
          </div>
          <div style={styles.blankDiv}>
            <h1>{this.state.inventoryMother}</h1>
          </div>
        </div>

        <div id='egg' style={styles.divA}>
          <h2 style={styles.nameA}> 雞蛋 </h2>
          <input style={styles.input} onChange={this._onEggChange} value={this.state.egg}></input>
          <button style={styles.button} onClick={this._onEggSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h1> {this.state.eggState} </h1>
          </div>
          <div style={styles.blankDiv}>
            <h1>{this.state.inventoryEgg}</h1>
          </div>
        </div>

        <div id='sugar' style={styles.divB}>
          <h2 style={styles.nameB}> 糖 </h2>
          <input style={styles.input} onChange={this._onSugarChange} value={this.state.sugar}></input>
          <button style={styles.button} onClick={this._onSugarSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h1> {this.state.sugarState} </h1>
          </div>
          <div style={styles.blankDiv}>
            <h1>{this.state.inventorySugar}</h1>
          </div>
        </div>

        <div id='milk' style={styles.divA}>
          <h2 style={styles.nameA}> 牛奶 </h2>
          <input style={styles.input} onChange={this._onMilkChange} value={this.state.milk}></input>
          <button style={styles.button} onClick={this._onMilkSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h1> {this.state.milkState} </h1>
          </div>
          <div style={styles.blankDiv}>
            <h1>{this.state.inventoryMilk}</h1>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Inventory;
