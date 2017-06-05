import Component, { tracked } from '@glimmer/component';

export default class Hn extends Component {
  @tracked results: any;

  constructor(options) {
    super(options);
    this.loadResults();
  }

  async loadResults() {
    let request = await fetch('http://node-hnapi.herokuapp.com/news');
    let results = await request.json();

    this.results = results;
  }
}
