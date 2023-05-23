export const massConverter = (massG: number): string => {
    let kilos = massG > 1000;
    return Intl.NumberFormat('pl', {
        style: 'unit',
        unit: kilos ? 'kilogram' : 'gram'
    }).format(kilos ? Math.floor(massG / 1000) : massG)
}