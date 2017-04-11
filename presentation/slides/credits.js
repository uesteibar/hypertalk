import React from "react";
import { Heading, Text, Link } from "spectacle";

export default class Credits extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} fit caps lineHeight={1} margin="0 0 100px" textColor="secondary">
          Thanks!
        </Heading>

        <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
          More docs for Hyper:&nbsp;
          <Link href="https://hyper.is" target="_blank" margin="20px 0 0" textColor="tertiary" size={6} fit bold>
            https://hyper.is
          </Link>
        </Text>
        <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
          You can find the code for the slides here:
        </Text>
        <Link href="https://github.com/uesteibar/hypertalk" target="_blank" margin="20px 0 0" textColor="tertiary" size={6} fit bold>
          https://github.com/uesteibar/hypertalk
        </Link>
      </div>
    )
  }
}
