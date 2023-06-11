import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;

    private view: AppView;

    public constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourceElement = document.querySelector('.sources') as HTMLElement;

        sourceElement.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
