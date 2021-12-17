import { matrixOne, matrixTwo, matrixThree, matrixFour, matrixFive, matrixSeven, matrixEight, matrixSix, matrixNine } from "./matrix.js";

export function createCombination() {
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < 3; i++) {
        matrixOne[i] = [];
        matrixTwo[i] = [];
        matrixThree[i] = [];
        matrixFour[i] = [];
        matrixFive[i] = [];
        matrixSeven[i] = [];
        matrixEight[i] = [];
        matrixSix[i] = [];
        matrixNine[i] = [];
    }


    for (let i = 0; i < matrixOne.length; i++) {
        for (let x = 0; x < 3; x++) {
            const random = (Math.random() * 10).toFixed();
            if (numbers.includes(random)) {
                const index = numbers.indexOf(random);
                numbers.splice(index, 1);
                matrixOne[i].push(random);
            } else {
                x -= 1;
            }
        }
    }
    matrixFour[2] = matrixOne[0];
    matrixFour[0] = matrixOne[1];
    matrixFour[1] = matrixOne[2];
    matrixSeven[2] = matrixFour[0];
    matrixSeven[0] = matrixFour[1];
    matrixSeven[1] = matrixFour[2];

    matrixTwo[0][0] = matrixOne[0][1];
    matrixTwo[1][0] = matrixOne[1][1];
    matrixTwo[2][0] = matrixOne[2][1];
    matrixTwo[0][1] = matrixOne[0][2];
    matrixTwo[1][1] = matrixOne[1][2];
    matrixTwo[2][1] = matrixOne[2][2];
    matrixTwo[0][2] = matrixOne[0][0];
    matrixTwo[1][2] = matrixOne[1][0];
    matrixTwo[2][2] = matrixOne[2][0];

    matrixFive[2] = matrixTwo[0];
    matrixFive[0] = matrixTwo[1];
    matrixFive[1] = matrixTwo[2];
    matrixEight[2] = matrixFive[0];
    matrixEight[0] = matrixFive[1];
    matrixEight[1] = matrixFive[2];


    matrixThree[0][0] = matrixTwo[0][1];
    matrixThree[1][0] = matrixTwo[1][1];
    matrixThree[2][0] = matrixTwo[2][1];
    matrixThree[0][1] = matrixTwo[0][2];
    matrixThree[1][1] = matrixTwo[1][2];
    matrixThree[2][1] = matrixTwo[2][2];
    matrixThree[0][2] = matrixTwo[0][0];
    matrixThree[1][2] = matrixTwo[1][0];
    matrixThree[2][2] = matrixTwo[2][0];

    matrixSix[2] = matrixThree[0];
    matrixSix[0] = matrixThree[1];
    matrixSix[1] = matrixThree[2];
    matrixNine[2] = matrixSix[0];
    matrixNine[0] = matrixSix[1];
    matrixNine[1] = matrixSix[2];

    const allNumbers = [];
    allNumbers.push(matrixOne.join());
    allNumbers.push(matrixTwo.join());
    allNumbers.push(matrixThree.join());
    allNumbers.push(matrixFour.join());
    allNumbers.push(matrixFive.join());
    allNumbers.push(matrixSix.join());
    allNumbers.push(matrixSeven.join());
    allNumbers.push(matrixEight.join());
    allNumbers.push(matrixNine.join());

    return allNumbers.join();
}