import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';
import 'regenerator-runtime';

const app = new App();
const containerElement = document.getElementById('app');

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager);
  }
});

app.renderComponent('hn-app', containerElement, null);

app.boot();
