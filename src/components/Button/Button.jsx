import './Button.scss'

export default function Button({buttonId, children, onClick, isActive}) {
    let classes = 'button'
    if (isActive) classes += ' active'
    return <button
        id={`button-${buttonId}`}
        className={classes}
        onClick={onClick}
    >
        {children}
    </button>
}