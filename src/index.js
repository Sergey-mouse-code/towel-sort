// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix)) {
        let matrixLength = matrix.length;
        let matrixSub = []
        let matrixResult = [];
        if (matrixLength === 0) return [];
        for (let i = 0; i < matrixLength; i++) {
            if (i % 2 !== 0) {
                matrixSub[i] = matrix[i].reverse();
            } else {
                matrixSub[i] = matrix[i];
            }

        }
        let matrixSubLength = matrixSub.length;
        for (let i = 0; i < matrixSubLength; i++) {
            for (let j = 0; j < matrixSub[i].length; j++) {
                matrixResult.push(matrixSub[i][j]);
            }
        }
        return matrixResult;
    }
    return [];
}