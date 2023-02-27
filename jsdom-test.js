import { JSDOM } from "jsdom";

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
global.window = dom.window;
global.document = dom.window.document;

// Now you can use window and document objects
console.log(window.innerWidth);
console.log(document.querySelector('body'));
