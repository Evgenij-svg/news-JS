import AppLoader from './appLoader';

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

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesInt) => void): void {
        super.getRespSources(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: NewsInt) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getRespNews(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
