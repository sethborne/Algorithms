// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
    let sortedArray = statues.sort((a, b) => a -b);
    console.log(sortedArray);
    let additionalStatues = 0;
    for (let i = 0; i < sortedArray.length - 1; i += 1) {
        if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
            // then there is something wrong.
            additionalStatues += sortedArray[i + 1] - sortedArray[i] - 1
        }
        else {
            // will just move on...
        }
        console.log(additionalStatues);
    }
    return additionalStatues;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));