import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./set-public-path";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

function domElementGetter() {
  let shouldCreateNew = false;
  let el = document.getElementById("apw-navbar");
  if (!el) {
    shouldCreateNew = true;
    el = document.createElement("nav");
    el.id = "apw-navbar";
  }
  el.className = "navbar navbar-dark bg-dark navbar-expand-lg";
  if (shouldCreateNew) {
    document.body.appendChild(el);
  }
  return el;
}
