import News from './news/news';
import Sources from './sources/sources';

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

export class AppView {
    private news: News;

    private sources: Sources;

    private constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsInt): void {
        console.log(data);
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesInt): void {
        console.log(data);
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
