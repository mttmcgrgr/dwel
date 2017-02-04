import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
const Panes = [{title: 1, content: "one"}, {title:2, content:"two"}, {title:3, content:"three"}];


class Root extends React.Component {
  render() {
    return(
      <div>
        <Tabs panes={Panes} />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root />, document.getElementById("root"));
});
