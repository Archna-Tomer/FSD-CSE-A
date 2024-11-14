const parent=document.querySelector("#root");
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'cyan'}},"Hello reactJS");
// const li1=React.createElement("li",{},"orange");
// const li2=React.createElement("li",{},"mango");
// const li3=React.createElement("li",{},"apple");
// const ul=React.createElement("ul",{},li1,li2,li3);
// const div=React.createElement("div",{style:{backgroundColor:"cyan"}},h2,ul);

// root.render(div);

const h21=<h2>Hello js in h2</h2>;
root.render(h21);;
const li1=<li>Apple</li>;
const li2=<li>Mango</li>;
const li3=<li>Orange</li>;
const li4=<li>Litchi</li>;
const ul=<ul style={{color:'red'}}>{li1}{li2}{li3}{li4}</ul>
root.render(ul);
const container=(
    <div>
        <h2>hello H2</h2>
        <div>{ul}</div>
        <div>{h21}</div>
    </div>
);
root.render(container);
