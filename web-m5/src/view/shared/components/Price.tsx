export default function Price(props: { children: number, calculateIVA?: boolean }) {
    return (
        <h3 style={{fontWeight: 'bold'}}>{Math.round((props.calculateIVA ? props.children * 1.21 : props.children) * 100 ) / 100}€</h3>
    )
}