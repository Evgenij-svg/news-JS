import './sources.css';
import NavSource from '../../element/navSource/navSource';

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
        console.log(!document.querySelector('.buttonElem'));
        if (!document.querySelector('.buttonElem')) {
            const sourceElements: NodeListOf<Element> = sourceElement.querySelectorAll('.source__item');
            const sourceItems: HTMLElement[] = Array.from(sourceElements) as HTMLElement[];
            const NavSourceButtons: NavSource = new NavSource(sourceItems);
            document.querySelector('body')?.appendChild(NavSourceButtons.drawButtons());
        }
    }
}

export default Sources;
