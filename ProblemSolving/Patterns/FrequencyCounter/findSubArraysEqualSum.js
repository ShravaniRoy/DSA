// find sub arrays of size k that have equal sum

function subArraySumFreq(arr, k) {
  let subArrSumFreq = {};
  let tempsum = 0;
  //compute the first k elements sum
  for (let i = 0; i < k; i++) {
    tempsum += arr[i];
  }
  subArrSumFreq[tempsum] = [[...arr.slice(0, k)]];
  //sliding window for next sum frequencies
  for (let i = k; i < arr.length; i++) {
    tempsum = tempsum - arr[i - k] + arr[i];
    let currentSubArray = [...arr.slice(i - k + 1, i + 1)]; //extract current sub array
    if (subArrSumFreq.hasOwnProperty(tempsum)) {
      subArrSumFreq[tempsum].push(currentSubArray);
    } else {
      subArrSumFreq[tempsum] = [currentSubArray];
    }
  }

  for (let each in subArrSumFreq) {
    console.log(`Sum ` + each, subArrSumFreq[each]);
  }
}

subArraySumFreq([1, 2, 3, 4, 5, 6, 2, 3, 4], 3);
