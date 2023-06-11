import './sources.css';

interface NewLink {
    id: string;
    name: string;
}

class Sources {
    public draw(data: NewLink[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceItemName.textContent = item.name;
            const sourceItemId = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItemId.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sourceElement = document.querySelector('.sources') as HTMLElement;
        sourceElement.append(fragment);
    }
}

export default Sources;
