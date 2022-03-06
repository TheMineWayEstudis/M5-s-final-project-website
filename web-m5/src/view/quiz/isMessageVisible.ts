export default function isMessageVisible(): boolean {
    const today = new Date();

    if(today.getFullYear() < 2022) return false; // Oh my, its "pasado" time
    return true; // DEBUG
    const month = today.getMonth() + 1;
    if(month <= 10) return false; // No mostrar antes de X mes

    return true;
}