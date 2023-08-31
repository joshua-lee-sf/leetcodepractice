/**
 * @param {number[]} height
 * @return {number}
 */

 // [1,8,6,2,5,4,8,3,7]

var maxArea = function(height) {
    // calculate volume
    // l = 0
    // r = height.length - 1
    // compare height between height[l] and height[r] take shorter and multiply that by l - r = area
    let l = 0; // 1
    let r = height.length - 1; //6
    let area = 0; //8

    while (l < r){
        let containerHeight = Math.min(height[l], height[r]); //h[l] = 8, h[r] = 8; = 8
        let base = r - l; //5
        let testArea = containerHeight * base; //40
        if (testArea > area) area = testArea; //49

        if (height[l] < height[r]) { //h[l] = 8, h[r] = 3, false
            l++;
        } else {
            r--;
        }
    }

    return area;
};