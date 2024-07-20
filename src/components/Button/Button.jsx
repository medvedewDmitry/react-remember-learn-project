import './Button.scss'

export default function Button({buttonId, children, isActive, ...props}) {
    let classes = 'button'
    if (isActive) classes += ' active'
    return <button
        {...props}
        id={`button-${buttonId}`}
        className={classes}
    >
        {children}
    </button>
}