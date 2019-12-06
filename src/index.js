import { Workbox } from 'workbox-window';
import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './assets/stylesheets/bootstrap.min.css';
import App from './components/App/App';

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const wb = new Workbox("/sw.js");
    const updateButton = document.querySelector("#app-update");
    // Fires when the registered service worker has installed but is waiting to activate.
    wb.addEventListener("waiting", event => {
      updateButton.classList.add("show");
      updateButton.addEventListener("click", () => {
      // Set up a listener that will reload the page as soon as the previously waiting service worker has taken control.
      wb.addEventListener("controlling", event => {
        window.location.reload();
      });

      // Send a message telling the service worker to skip waiting.
      // This will trigger the `controlling` event handler above.
      wb.messageSW({ type: "SKIP_WAITING" });
    });
    });

    wb.register();
  });
}

let appEl = document.getElementById('app');
if (!appEl) // in case of old index.html in cache
  appEl = document.querySelector('.app');

ReactDOM.render(<App />, appEl);
