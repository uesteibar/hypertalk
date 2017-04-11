import React from "react";
import { Appear, Heading, Text } from "spectacle";

export default class What extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} fit caps lineHeight={1} margin="0 0 100px" textColor="secondary">
          WTF is Hyper?
        </Heading>
        {this.appearingText("It's just a terminal")}
        {this.appearingText("It's built in JS")}
        {this.appearingText("It's awesomeness")}
      </div>
    )
  }

  appearingText = (text) => {
    return(
      <Appear>
        <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
          {text}
        </Text>
      </Appear>
    )
  }
}
