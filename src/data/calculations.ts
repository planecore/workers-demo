const squareRoot = (maxNumber: number) => {
  const arr = new Int32Array(maxNumber).map((curr, index) => (curr = index + 1))
  arr.map((num) => Math.sqrt(num))
}

const squared = (maxNumber: number) => {
  const arr = new Int32Array(maxNumber).map((curr, index) => (curr = index + 1))
  arr.map((num) => Math.pow(num, 2))
}

const multiply = (maxNumber: number) => {
  const arr = new Int32Array(maxNumber).map((curr, index) => (curr = index + 1))
  arr.reduce((prev, curr) => prev * curr)
}

const randomizeAndSort = (maxNumber: number) => {
  const shuffleArray = (array: Int32Array) => {
    const a = array
    for (var c, d, b = a.length; 0 !== b; )
      (d = Math.floor(Math.random() * b)), (b -= 1), (c = a[b]), (a[b] = a[d]), (a[d] = c)
    return array
  }

  const arr = new Int32Array(maxNumber).map((curr, index) => (curr = index + 1))
  const shuffled = shuffleArray(arr)
  shuffled.sort()
}

export { squareRoot, squared, multiply, randomizeAndSort }
