// Polyfills
import 'core-js/fn/string/repeat';
import 'core-js/fn/array/fill';
import 'core-js/fn/object/assign';

import { h, render } from 'preact';
import Playground from './playground';
import Symbol from './symbols';
import './style.css';

render(
  <div>
    <h1>LED Simulator</h1>
    <h2>Text Writer</h2>
    <Playground/>
    <h2>Symbols</h2>
    <Symbol/>
  </div>,
  document.getElementById('root')
);
