export default function Price(props: { children: number, calculateIVA?: boolean }) {
    return (
        <h3 style={{fontWeight: 'bold'}}>{processPrice(Math.round((props.calculateIVA ? calculateIva(props.children, 21) : props.children) * 100 ) / 100)}€</h3>
    )
}

export function processPrice(price: number): string {
    return price.toString();
}

export function calculateIva(price: number, iva: number): number {
    return Math.round((price + (price * (iva / 100))) * 100) / 100;
}