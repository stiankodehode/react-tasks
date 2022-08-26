import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FlexRow, StyledParagraph } from "./components/styled";

function App() {
    const [catFacts, setCatFacts] = useState();

    useEffect(() => {
        axios
            .get("https://catfact.ninja/facts")
            .then((res) => {
                setCatFacts(res.data.data);
            })
            .catch(console.log("Error"));
    }, []);

    if (catFacts) {
        return (
            <div className="App">
                <FlexRow>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>React Tasks (API Call)</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </FlexRow>
                {/* Mapping the catfacts to elements */}
                {catFacts.map((ele, idx) => {
                    return (
                        <StyledParagraph key={idx}>{ele.fact}</StyledParagraph>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="App">
                <h1>Loading...................</h1>
            </div>
        );
    }
}

export default App;
