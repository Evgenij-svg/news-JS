class Button {
    private Text: string;

    private callback: () => void;

    public constructor(Text: string, callback: () => void) {
        this.Text = Text;
        this.callback = callback;
        this.CreateButton();
    }

    public CreateButton(): HTMLButtonElement {
        const ButtonElem: HTMLButtonElement = document.createElement('button');
        ButtonElem.textContent = this.Text;
        ButtonElem.classList.add('buttonElem');
        ButtonElem.onclick = this.callback;
        return ButtonElem;
    }
}

export default Button;
