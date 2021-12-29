import { sectionTitleStyle } from '../../../styles/fontStyles';

export default function SectionTitle(props: { children: string }) {
    return (
        <h1 style={sectionTitleStyle}>{props.children}</h1>
    );
}