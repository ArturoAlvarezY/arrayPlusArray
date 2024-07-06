const arraysAdition = (firstAray, secondArray) =>
{
    let firstSum = 0;
    for (let index = 0; index < firstAray.length; index++) {
    firstSum += firstAray[index];
}

    let secondSum = 0;
    for (let index = 0; index < secondArray.length; index++) {
        secondSum += secondArray[index];
    }

    let adittion = firstSum + secondSum;

    return adittion;
};


