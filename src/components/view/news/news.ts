import './news.css';

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

class News {
    protected draw(data: New[]): void {
        console.log(data);
        console.log('h1');
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        console.log(news);
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                const NewsItem = newsClone.querySelector('.news__item') as HTMLElement;
                NewsItem.classList.add('alt');
            }
            const NewsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            NewsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const NewsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            NewsMetaAuthor.textContent = item.author || item.source.name;

            const NewsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            NewsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const NewsdescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            NewsdescriptionTitle.textContent = item.title;
            const NewsdescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            NewsdescriptionSource.textContent = item.source.name;
            const NewsdescriptionContent = newsClone.querySelector('.news__description-source') as HTMLElement;
            NewsdescriptionContent.textContent = item.description;
            const NewsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            NewsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const NewsElement = document.querySelector('.news') as HTMLElement;
        NewsElement.innerHTML = '';
        NewsElement.appendChild(fragment);
    }
}

export default News;
