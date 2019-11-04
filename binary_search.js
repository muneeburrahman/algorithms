function binary_search(arrayOfElements, length, elementToFind) {
    var start = 0;
    var end = length - 1;
    while (start <= end) {
        var middleIndex = Math.floor(start + end / 2);
        if (arrayOfElements[middleIndex] < elementToFind) {
            start = middleIndex + 1;
        }
        else if (arrayOfElements[middleIndex] > elementToFind) {
            end = middleIndex - 1;
        }
        else {
            return middleIndex;
        }
    }
    return -1;
}
var arrayOfStrings = ["A", "B", "G", "F", "L", "Z"];
var index = binary_search(arrayOfStrings, arrayOfStrings.length, "G");
if (index == -1) {
    console.log("Not found");
}
else {
    console.log("Found element at index: " + index);
}
