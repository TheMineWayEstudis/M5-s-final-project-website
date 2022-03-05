type Props = {
    children: string;
}

export default function SectionDescription(props: Props) {
    return (
        <p
            style={{textAlign: 'center'}}
        >{props.children}</p>
    );
}