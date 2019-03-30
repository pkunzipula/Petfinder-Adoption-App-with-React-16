const Pet = props => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed)
        ]
    );
};

class App extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "poopysville"},
            [
                React.createElement(Pet, {
                    name: "Jay Bay",
                    animal: "Dizzity Dog",
                    breed: "Havartinese"
                }),
                React.createElement(Pet, {
                    name: "Sawyer",
                    anima: "Dogg",
                    breed: "Mini Awesee"
                }),
                React.createElement(Pet, {
                    name: "Dexter",
                    animal: "Cat",
                    breed: "Mean cat"
                }),
            ]
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));