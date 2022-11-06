function betterThanAverage(ClassPoints, yourPoints) {
    ClassPoints.push(yourPoints);
    const averageClassPointsWithMyMark = ClassPoints.reduce((sum, current) => sum + current, 0) / ClassPoints.length;
    if (yourPoints > averageClassPointsWithMyMark) {
        return true
    } else {
        return false
    }
}