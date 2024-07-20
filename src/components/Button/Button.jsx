import './Button.scss'

export default function Button({buttonId, children, onClick}) {
    return <button
        id={`button-${buttonId}`}
        className={'button'}
        onClick={onClick}
    >
        {children}
    </button>
}