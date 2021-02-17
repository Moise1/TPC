export const repositionElements = (arr, from, to) => {
    let cutOut = arr.splice(from, 1)[0];  // cut the element at index 'from'
    return arr.splice(to, 0, cutOut);  // insert it at index 'to';
}