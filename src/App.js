import React, { Component } from 'react'
import Clicker from './components/clicker'
import Coders from './components/coders'
import Display from './components/display'
import Game from './components/game'
import Stats from './components/stats'
import Upgrades from './components/upgrades'

export class App extends Component {

  state = {
    clicks: 0,
    code: 0,
    spent_code: 0,
    absolute_code: 0,
    minutes_played: 0,
    click_power: 1,
    cps: 0,
    classmates: 0,
    hackathon_partners: 0,
    teachers: 0
  }

  componentDidMount() {
    this.minuteCounter()
  }

  clickFn = () => {
    console.log('clicky boi');
    let code = this.state.code + this.state.click_power;
    this.setState({code})
  }
  
  minuteCounter = () => {
    setInterval(() => {this.setState({minutes_played: ++this.state.minutes_played})}, 60000)
  }
  
  render(){
    return (
      <div>
        {/* <Stats minutes_played={this.state.minutes_played}/> */}
        <Display code={this.state.code}/>
        <Clicker clickFn={this.clickFn} click_power={this.click_power} cps={this.state.cps}/>
      </div>
    )
  }
}

export default App;
