export default class Game {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.image = data.image;
    this.time = data.time;
    this.type = data.type;
    this.downloads = data.downloads;
    this.description = data.description;
  }
  shortDescription() {
    return this.description.length > 100
      ? this.description.substring(0, 100) + "..."
      : this.description;
  }
}
