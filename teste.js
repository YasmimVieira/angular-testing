function sumMix(x) {
    parseInt(x)

    const reducer = (acumulator, currentValue) => acumulator + currentValue;
    return x.reduce(reducer)
}
sumMix([9, 3, '7', '3'])