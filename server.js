module.exports = {

	//This function uses reduce method and it sums all numbers in an array and returns a single value

    arraySum: function (arr){

        return arr.reduce(function(a, b){

            return a + b

        }, 0);

    },



    //This function gets the sum of an array an divides it by the length of the array (It then returns the average value)

    arrayAverage: function (arr){

        return arr.reduce(function(a, b){

            return a + b

        }, 0) / (arr.length === 0 ? 1 : arr.length);

    }, 



    arrayMax: function(arr){

    	return arr.reduce(function(a, b){

    		return Math.max(a, b);

    	})

    },



    arrayMin: function(arr){

    	return arr.reduce(function(a, b){

    		return Math.min(a, b);

    	})

    },



    arrayUniq: function(arr){

        var res = [];

        for (var i = 0; i < arr.length; i++){

            if (res.indexOf(arr[i]) == -1){

                res.push(arr[i]);

            }

        }

        return res;

    },

    

    arrayUniqSort: function(arr){

        var res = [];

        for (var i = 0; i < arr.length; i++){

            if (res.indexOf(arr[i]) == -1){

                res.push(arr[i]);

            }

        }

        var sort = res.sort(function(a,b){return a - b;})

        return sort;

    },

    

    arrayUniqString: function(arr){

        var res = [];

        for (var i = 0; i < arr.length; i++){

            if (res.indexOf(arr[i]) == -1){

                res.push(arr[i]);

            }

        }

        

        return res.sort();

    }

}