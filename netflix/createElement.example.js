/**
 * This is to just show that i understand the syntax here
 * I'd prefer to not use this method in my actual code if
 * it's not necessary.
 */

import React, { ReactDOM } from "react";

const create = React.createElement;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(create("div", null, "Hello World"));
