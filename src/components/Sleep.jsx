import React from "react";

class Sleep extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.status;

        this.sleepButtonClicked = this.sleepButtonClicked.bind(this);
    }


    sleepButtonClicked() {
        this.props.onSleepButtonClicked();
    }

  
  render() { 
    return (
    <div>
        <button onClick={ ()=>  this.sleepButtonClicked()}>Make JimAGotchi Sleep</button>
    </div>
    );
  }
}

export default Sleep;