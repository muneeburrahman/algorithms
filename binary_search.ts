/**
 * 
 * @param arrayOfElements Sorted Array to search for the given element
 * @param length length of the sorted array
 * @param elementToFind element to find in the given sorted Array
 */

function binary_search(arrayOfElements: Array<any>, length: number, elementToFind: any){
    let start: number = 0;
    let end : number = length-1;
    while (start<=end){
        let middleIndex: number = Math.floor(start+end/2);
        if(arrayOfElements[middleIndex]< elementToFind){
            start = middleIndex+1;
        }else if(arrayOfElements[middleIndex]> elementToFind){
            end = middleIndex-1;
        }else{
            return middleIndex;
        }

    }
    return -1;
}



const arrayOfStrings : Array<string>= ["A", "B","G", "F","L","Z"];

let elementToFind = "G";

let index = binary_search(arrayOfStrings,arrayOfStrings.length,elementToFind);

if(index == -1){
    console.log("Not found");
}else{
    console.log("Found element at index: "+ index);
}