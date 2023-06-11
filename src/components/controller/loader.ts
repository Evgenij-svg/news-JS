interface Options {
    [key: string]: string;
}
interface URL {
    endpoint: string;
    options?: object;
}

interface NewLink {
    id: string;
    name: string;
}
interface SourcesInt {
    sources: NewLink[];
}

interface New {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

interface NewsInt {
    articles: New[];
}

class Loader {
    private baseLink: string;

    private options: Options;

    protected constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getRespSources(
        { endpoint, options = {} }: URL,
        callback = (data: SourcesInt): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.loadSources('GET', endpoint, callback, options);
    }

    protected getRespNews(
        { endpoint, options = {} }: URL,
        callback = (data: NewsInt): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.loadNews('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: object, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private loadSources(method: string, endpoint: string, callback: (data: SourcesInt) => void, options = {}): void {
        console.log(this.makeUrl(options, endpoint));
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((res) => callback(res))
            .catch((err) => console.error(err));
    }

    private loadNews(method: string, endpoint: string, callback: (data: NewsInt) => void, options = {}): void {
        console.log(this.makeUrl(options, endpoint));
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((res) => callback(res))
            .catch((err) => console.error(err));
    }
}
export default Loader;
