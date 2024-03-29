

export const sum = (a: number, b: number) : number => {
    return a + b ;
}

export const sumOf = (number : number[]) => {
    let result = number.reduce((a,b) => a + b, 0 )
    return result;
}