const nesDiv = React.createElement("div", { id: "parent" }, [

    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Hey i am h1 tag"),
        React.createElement("h2", {}, "Hey i am h2 tag")
    ]),

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hey i am h1 tag"),
        React.createElement("h2", {}, "Hey i am h2 tag")
    ])
])




// const heading = React.createElement("h1", {}, "Hello World by React!")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nesDiv);

