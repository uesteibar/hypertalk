import React from "react";
import { Appear, Heading, Text } from "spectacle";

export default class How extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} fit caps lineHeight={1} margin="0 0 100px" textColor="secondary">
          Wait, you said hackable...
        </Heading>
        {this.appearingText("Built on Electron + React + Redux")}
        {this.appearingText("Access to three different scoped reducers")}
        {this.appearingText("Every plugin is a middleware function")}
        {this.appearingText("Access to a bunch of scoped decorators")}
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
