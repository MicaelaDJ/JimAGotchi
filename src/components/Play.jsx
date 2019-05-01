import React from "react";

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.status;

        this.playButtonClicked = this.playButtonClicked.bind(this);
    }


    playButtonClicked() {
        this.props.onPlayButtonClicked();
    }

  
  render() { 
    return (
    <div>
        <button onClick={ ()=>  this.playButtonClicked()}>Play with JimAGotchi</button>
    </div>
    );
  }
}

export default Play;