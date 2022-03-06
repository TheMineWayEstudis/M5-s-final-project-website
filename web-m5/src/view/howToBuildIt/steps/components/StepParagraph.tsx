export default function StepParagraph(props: { children: JSX.Element | JSX.Element[] | string }) {
    return (
        <p style={{textAlign: 'justify'}}>{props.children}</p>
    );
}