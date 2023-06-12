import Button from '../button/button';

class NavSource {
    private Item: HTMLElement[];

    private position: number;

    public constructor(Item: HTMLElement[]) {
        this.Item = Item;
        this.position = 0;
    }

    private UpClick(): void {
        this.position -= 55;
        this.Item.forEach((elem: HTMLElement) => {
            // eslint-disable-next-line no-param-reassign
            elem.style.top = `${this.position}px`;
        });
    }

    private DownClick(): void {
        this.position += 55;
        console.log(this.Item);
        this.Item.forEach((elem: HTMLElement) => {
            // eslint-disable-next-line no-param-reassign
            elem.style.top = `${this.position}px`;
        });
    }

    public drawButtons(): HTMLElement {
        console.log(this.Item);
        const Parent = document.createElement('div');

        const buttonUp = new Button('↑', this.UpClick);
        const arrowUp: HTMLButtonElement = buttonUp.CreateButton();
        Parent.appendChild(arrowUp);

        const buttonDown = new Button('↓', this.DownClick);
        const arrowDown: HTMLButtonElement = buttonDown.CreateButton();
        Parent.appendChild(arrowDown);

        return Parent;
    }
}

export default NavSource;
