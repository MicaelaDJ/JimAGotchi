import React from "react";

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.status;

        this.feedButtonClicked = this.feedButtonClicked.bind(this);
    }


    feedButtonClicked() {
        
        this.props.onFeedButtonClicked();
    }

  
  render() { 
    return (
    <div>
        <button onClick={ ()=>  this.feedButtonClicked()}>Feed JimAGotchi</button>
    </div>
    );
  }
}

export default Feed;