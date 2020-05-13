interface Scoreable {
  readonly totalScore: number;
  render(): void;
}

interface Foodable {
  element: HTMLDivElement;
  handleClick(): void;
}

interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Score implements Scoreable { 
  private static instance: Score;

  private constructor() {}

  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }

    return Score.instance;
  }

  get totalScore() {
    const foods = Foods.getInstance();

    return foods.activeElementsScore.reduce((total, score) => total + score);
  }

  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }
}

class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.handleClick.bind(this))
  }

  handleClick() {
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}

class Foods implements Foodsable {
  private static instance: Foods;

  elements = document.querySelectorAll<HTMLDivElement>('.food')
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];

  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {      
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element)
      }
    })
    return this._activeElements;
  }

  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const scoreElm = element.querySelector('.food__score');
      if (scoreElm) {
        this._activeElementsScore.push(Number(scoreElm.textContent));
      }
    })
    return this._activeElementsScore;
  }

  private constructor() {
    this.elements.forEach(element => new Food(element));
  }

  static getInstance() {
    if (!Foods.instance) { 
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}

const foods = Foods.getInstance();