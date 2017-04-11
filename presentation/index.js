// Import React
import React from "react";
import { Deck, Slide } from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#006567",
  tertiary: "#545454",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

import Title from './slides/title'
import What from './slides/what'
import Why from './slides/why'
import How from './slides/how'
import Questions from './slides/questions'
import Credits from './slides/credits'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={300} theme={theme}>
        <Slide transition={["fade"]}>
          <Title />
        </Slide>
        <Slide transition={["fade"]}>
          <What />
        </Slide>
        <Slide transition={["fade"]}>
          <Why />
        </Slide>
        <Slide transition={["fade"]}>
          <How />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/reducer.example")}
          ranges={[
            { loc: [0, 0], title: "Export the reducer" },
            { loc: [2, 3], note: "For your action type" },
            { loc: [7, 10], note: "Return a new state" },
            { loc: [0, 0], title: "Simple" },
          ]}/>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/props.example")}
          ranges={[
            { loc: [0, 0], title: "Assign the props" },
            { loc: [0, 5], note: "Map from your state to props" },
            { loc: [6, 11], note: "Pass to your decorator" },
            { loc: [12, 14], note: "Export" },
            { loc: [0, 0], title: "Hacky" },
          ]}/>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/middleware.example")}
          ranges={[
            { loc: [0, 0], title: "Define your middleware" },
            { loc: [2, 3], note: "You can check for specific actions" },
            { loc: [6, 7], note: "Dispatch your action" },
            { loc: [8, 9], note: "Then it's turn for the next middleware" },
          ]}/>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/decorator.example")}
          ranges={[
            { loc: [0, 0], title: "Decorate the component" },
            { loc: [2, 14], note: "Some hack to fix react import" },
            { loc: [15, 16], note: "Export higher order component" },
            { loc: [17, 27], note: "Add Term as a children" },
            { loc: [31, 39], note: "Hack whatever you want" },
            { loc: [0, 0], title: "AWESOME" },
          ]}/>
        <Slide transition={["fade"]}>
          <Questions />
        </Slide>
        <Slide transition={["fade"]}>
          <Credits />
        </Slide>
      </Deck>
    );
  }
}
