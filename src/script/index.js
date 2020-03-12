// css
import '@style/index.scss';

// js
import loadEvents from './eventLoader';
import common from './common';
import home from './page/home';

const functions = {
  common,
  home,
};

document.addEventListener('DOMContentLoaded', loadEvents(functions), false);
