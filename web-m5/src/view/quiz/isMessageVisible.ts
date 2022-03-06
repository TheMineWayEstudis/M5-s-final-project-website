export default function isMessageVisible(): boolean {
    const today = new Date();

    if(today.getFullYear() < 2022) return false; // Oh my, its "pasado" time

    const month = today.getMonth() + 1;
    if(month <= 9) return false; // No mostrar antes de X mes

    return true;
}