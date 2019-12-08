export class AppView {
  private _container: Element;
  public get container(): Element {
      return this._container;
  }

  constructor(container: Element) {
    this._container = container;
  }
}
  