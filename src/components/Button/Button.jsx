import './Button.scss'

export default function Button({buttonId, children, onClick, isActive}) {
    return <button
        id={`button-${buttonId}`}
        className={isActive ? 'button active' : 'button'}
        onClick={onClick}
    >
        {children}
    </button>
}