import React from "react";
import Tamagotchi from "./Tamagotchi";

class TamagotchiControl extends React.Component {
    

    constructor(props) {
        super(props);
        this.state= {
            isDead: false,
            hp: 100,
        }
        this.decliningHealth = this.decliningHealth.bind(this);
        this.handleFeedButtonClicked = this.handleFeedButtonClicked.bind(this);
        this.handleSleepButtonClicked = this.handleSleepButtonClicked.bind(this);
        this.handlePlayButtonClicked = this.handlePlayButtonClicked.bind(this);
    }

    handleFeedButtonClicked() {
        var newHealth = this.state.hp;

        if (newHealth < 90 ){
            this.setState({hp: newHealth +10})
        }
    }

    handleSleepButtonClicked() {
        var newHealth = this.state.hp;

        if (newHealth < 70 ){
            this.setState({hp: newHealth +30})
        }
    }

    handlePlayButtonClicked() {
        var newHealth = this.state.hp;

        if (newHealth < 90 ){
            this.setState({hp: newHealth +5})
        }
    }

    restartGame() {
        location.reload();
    }

    
    decliningHealth() {
        document.getElementById("startButton").style.display = "none"
        var newHealthState;
        
        let clock = setInterval(() => {
            newHealthState = this.state.hp;
            newHealthState--;
            this.setState({hp: newHealthState})
        if (this.state.hp <= 0) {
            document.getElementById("restartButton").style.display = "inline"
            this.setState({isDead: true, hp: "Dead"});
            clearInterval(clock)
        }}, 500);
    }
    
    
    
    
  
  render() { 
    let styles = {
        display: 'none'
    }
    return (
        <div>
            <style>{`
                    .center {
                        text-align: center;
                    }
                `}
                </style>

            <div className="center">
                <Tamagotchi health = {this.state.hp} onFeedButtonClicked = {this.handleFeedButtonClicked} onSleepButtonClicked = {this.handleSleepButtonClicked} onPlayButtonClicked = {this.handlePlayButtonClicked}/>
                <p>Health: {this.state.hp}</p>
                <button id="startButton" onClick={this.decliningHealth}>Start game</button>
                <button style={styles} id="restartButton" onClick={this.restartGame}>Restart game</button>
            </div>

        </div>
        
    );
  }
}

export default TamagotchiControl;