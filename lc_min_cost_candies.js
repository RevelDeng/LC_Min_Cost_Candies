var minimumCost = function(cost) {
    var min_cost = 0
    var new_arr = cost.sort((a, b) => b - a)
    for (let i = 0; i < new_arr.length; i++) {
        if ((i + 1) % 3 == 0) {
            continue
        }
        min_cost += new_arr[i]
    }
    return min_cost
};