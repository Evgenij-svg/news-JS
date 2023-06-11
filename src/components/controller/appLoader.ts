import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd89d3f1fcf374dd7a1f4a28d6c2d5fd3', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
