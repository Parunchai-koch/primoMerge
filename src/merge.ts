export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
) : number[] {

    const firstMerge = mergeTwoSortedArrays(collection_1, collection_2);
    return mergeDescending(firstMerge, collection_3);

}

function mergeTwoSortedArrays(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i++]);
        }
        else{
            result.push(arr2[j++]);
        }
    }
    while(i < arr1.length){
        result.push(arr1[i++]);
    }
    while(j < arr2.length){
        result.push(arr2[j++]);
    }

    return result;
}

function mergeDescending(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = arr2.length - 1;
    while(i < arr1.length && j >= 0){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i++]);
        }
        else{
            result.push(arr2[j--]);
        }
    }
    while(i < arr1.length){
        result.push(arr1[i++]);
    }
    while(j >= 0){
        result.push(arr2[j--]);
    }

    return result;
}