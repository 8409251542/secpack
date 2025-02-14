function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === x) {
            return mid;
        }
        if (guess > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}
module.exports = { binarySearch };