var array = [1, 2, 3, 4, 5];
var foolish = new Foolish();

QUnit.test("getIndex test", function (assert) {
    var index = foolish.getIndex(array, 3);
    assert.ok(index === 2, 'getIndex passed');
});

QUnit.test("getNextIndex test", function (assert) {
    var nextIndex = foolish.getNextIndex(array, 3);
    assert.ok(nextIndex === 3, 'getNextIndex passed');
    nextIndex = foolish.getNextIndex(array, 4);
    assert.ok(nextIndex === 4, 'getNextIndex of last element(5) is passed!');
    nextIndex = foolish.getNextIndex(array, 5);
    assert.ok(nextIndex === 0, 'getNextIndex of last element(5) is passed!');
});

QUnit.test("getPreviousIndex test", function (assert) {
    var previousIndex = foolish.getPreviousIndex(array, 3);
    assert.ok(previousIndex === 1, 'getPreviousIndex passed');
    previousIndex = foolish.getPreviousIndex(array, 4);
    assert.ok(previousIndex === 2, 'getPreviousIndex of last element(5) is passed!');
    previousIndex = foolish.getPreviousIndex(array, 1);
    assert.ok(previousIndex === 4, 'getPreviousIndex of last element(5) is passed!');
});

QUnit.test("isLast test", function (assert) {
    var last = foolish.isLast(array, 3);
    assert.ok(last===false, 'isLast passed');
    last = foolish.isLast(array, 5);
    assert.ok(last, 'isLast passed');
});

QUnit.test("isFirst test", function (assert) {
    var first = foolish.isFirst(array, 3);
    assert.ok(first===false, 'isFirst passed');
    first = foolish.isFirst(array, 1);
    assert.ok(first, 'isFirst passed');
});
	
QUnit.test("getNextIndexes test", function (assert) {
    var nextIndexes = foolish.getNextIndexes(array, 3, 2);
	assert.deepEqual( nextIndexes, [3,4], "nextIndexes should be equal" );
});

QUnit.test("getPreviousIndexes test", function (assert) {
    var previousIndexes = foolish.getPreviousIndexes(array, 3, 2);
	assert.deepEqual( previousIndexes, [1,0], "previousIndexes should be equal" );
});
