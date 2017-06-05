import Component, { tracked } from '@glimmer/component';

export default class Hn extends Component {
  @tracked page = 1;
  @tracked results: any;

  constructor(options) {
    super(options);
    this.loadResults();
  }

  async loadResults() {
    let request = await fetch(`http://node-hnapi.herokuapp.com/news?page=${this.page}`);
    let results = await request.json();

    this.results = results;
  }

  next() {
    this.page += 1;
    this.loadResults();
  }

  back() {
    if (this.page > 1) {
      this.page -= 1;
      this.loadResults();
    }
  }
}
