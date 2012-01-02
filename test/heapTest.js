describe('Heap',
function() {
	    
	var heap=null;
	
    beforeEach(function() {
        heap = new buckets.Heap();
    });

    function Heap1() {
        heap.add(0);
        heap.add(1);
        heap.add(2);
        heap.add(3);
    };

	function Heap2() {
		heap.add(1);
		heap.add(3);
		heap.add(0);
		heap.add(2);
	};
	
    it('Gives the right size 1',
    function() {
        Heap1();
        expect(heap.size()).toEqual(4);
        heap.removeRoot();
        expect(heap.size()).toEqual(3);
    });

    it('Gives the right size 2',
    function() {
        Heap1();
		heap.removeRoot();
		heap.removeRoot();
		heap.removeRoot();
		heap.removeRoot();
		expect(heap.size()).toEqual(0);
    });

	it('Peeks the lowest element',
    function() {
 		Heap1();
		expect(heap.peek()).toEqual(0);
		heap.clear();
		expect(heap.peek()).toBeUndefined();
    });

	it('Peeks the lowest element 2',
    function() {
 		Heap2();
		expect(heap.peek()).toEqual(0);
    });

	it('Removes root',
    function() {
		Heap1();
		expect(heap.removeRoot()).toEqual(0);
		expect(heap.removeRoot()).toEqual(1);
		expect(heap.removeRoot()).toEqual(2);
		expect(heap.removeRoot()).toEqual(3);
    });

	it('Removes root 2',
    function() {
		Heap2();
		expect(heap.removeRoot()).toEqual(0);
		expect(heap.removeRoot()).toEqual(1);
		expect(heap.removeRoot()).toEqual(2);
		expect(heap.removeRoot()).toEqual(3);
    });

	it('Adds and peeks',
    function() {
		heap.add(3);
		expect(heap.peek()).toEqual(3);
		heap.add(2);
		expect(heap.peek()).toEqual(2);
		heap.add(1);
		expect(heap.peek()).toEqual(1);
		heap.add(0);
		expect(heap.peek()).toEqual(0);
    });

	it('Adds and peeks 2',
    function() {
		heap.add(1);
		expect(heap.peek()).toEqual(1);
		heap.add(3);
		expect(heap.peek()).toEqual(1);
		heap.add(0);
		expect(heap.peek()).toEqual(0);
		heap.add(2);
		expect(heap.peek()).toEqual(0);
    });

	it('Contains inserted elements',
    function() {
		Heap1();
		for (var i = 0; i < 4; i++) {
		  expect(heap.contains(i)).toBeTruthy();
		}
		expect(heap.contains(i)).toBeFalsy();
    });
});