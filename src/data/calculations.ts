const squareRoot = (maxNumber: number) => {
  const arr = Array.from(Array(maxNumber)).map((_, i) => i + 1)
  return arr.map((num) => Math.sqrt(num))
}

const squared = (maxNumber: number) => {
  const arr = Array.from(Array(maxNumber)).map((_, i) => i + 1)
  return arr.map((num) => Math.pow(num, 2))
}

const multiply = (maxNumber: number) => {
  const arr = Array.from(Array(maxNumber)).map((_, i) => i + 1)
  return arr.reduce((prev, curr) => prev * curr)
}

const randomizeAndSort = (maxNumber: number) => {
  const shuffleArray = (array: number[]) => {
    const a = array
    for (var c, d, b = a.length; 0 !== b; )
      (d = Math.floor(Math.random() * b)), (b -= 1), (c = a[b]), (a[b] = a[d]), (a[d] = c)
    return array
  }

  const arr = Array.from(Array(maxNumber)).map((_, i) => i + 1)
  const shuffled = shuffleArray(arr)
  return shuffled.sort()
}

export { squareRoot, squared, multiply, randomizeAndSort }
