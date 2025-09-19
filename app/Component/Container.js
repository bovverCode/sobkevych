export default function Container({ classes, children }) {
    const elementClasses = [classes, 'container'];
    return (
        <div className={elementClasses.join(' ')}>
            {children}
        </div>
    );
}