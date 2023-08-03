/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    for (let i = 0; i < points.length; i++){
        let distFromMiddle = (points[i][0] ** 2) + (points[i][1] ** 2)
        points[i].unshift(distFromMiddle);
    }

    points = points.sort((a,b)=>  a[0] - b[0]);
    res = []
    while (k > 0){
        [dist, x, y] = points.shift()
        res.push([x,y])
        k--;
    }

    return res;
};