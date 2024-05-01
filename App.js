const family = React.createElement(
    "div", 
    {id: "family"},[
    React.createElement(
        "div", 
        {id: "Grandparents"},
        React.createElement("h1", {}, "This My Family"),
    ),
    React.createElement(
        "div", 
        {id: "Parents"},[
        React.createElement("h2", {}, "1) He is My Father"),
        React.createElement("h2", {}, "2)She is My Mother"),
        ]),
        React.createElement(
            "div", 
            {id: "children"},[
            React.createElement("h3", {}, "3)He is My Elder Brother"),
            React.createElement("h3", {}, "4)She is My Younger Sister"),
            ]),
]);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(family);