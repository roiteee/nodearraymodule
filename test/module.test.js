var expect = require('expect');



var utils = require('../server');



describe('Array', () => {

	it('should exist', () => {

		var arr = [1]

		var arraySum = utils.arraySum(arr)



		expect('arraySum').toExist;

	});

})



describe('Array Sum', () => {



	it('should return the sum of the array', () => {

		var array = [1,2,3,4]

		var arraySum = utils.arraySum(array)



		expect(arraySum).toBe(10);

	});





	it('should be a number', () => {

		var array = [1,2,3,4]

		var arraySum = utils.arraySum(array)



		expect(typeof arraySum).toBe('number');

	});



	it('should return zero as the sum when array is empty', () => {

		var array = []

		var arraySum = utils.arraySum(array)



		expect(arraySum).toBe(0);

	});

})



describe('Array Average', () => {

	it('should return the avarage value of the array', () => {

		var array = [2, 4, 6, 8];



		var arrayAverage = utils.arrayAverage(array);



		expect(arrayAverage).toBe(5)

	});



	it('should be a number', () => {

		var array = [2, 4, 6, 8];



		var arrayAverage = utils.arrayAverage(array);



		expect(typeof arrayAverage).toBe('number');

	});



	it('should return zero as the average when array is empty', () => {

		var array = [];



		var arrayAverage = utils.arrayAverage(array);



		expect(arrayAverage).toBe(0)

	})

})