var vin = new vintage();

QUnit.test("isInFuture test", function (assert) {
	var now = new Date();
	var tocheck = new Date();
    var future = vin.isInFuture(now, tocheck);
    assert.ok(future === false, 'isInFuture passed');
});
