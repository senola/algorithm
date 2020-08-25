import Set from '../../../src/data-structures/set/set';

test('01、has()', ()=> {
    const set = new Set();

    expect(set.has('1')).toEqual(false);
});

test('02、add()', ()=> {
    const set = new Set();

    set.add('1');
    expect(set.has('1')).toEqual(true);
    expect(set.add('1')).toEqual(false);
});

test('03、delete()', ()=> {
    const set = new Set();

    set.add('1');
    expect(set.delete('1')).toEqual(true);
    expect(set.delete('1')).toEqual(false);
});

test('03、clear()', ()=> {
    const set = new Set();

    set.add('1');
    set.add('2');
    set.add('3');
    set.clear();
    expect(set.size()).toEqual(0);
    expect(set.delete('1')).toEqual(false);
});

test('03、values()', ()=> {
    const set = new Set();

    set.add('1');
    set.add('2');
    set.add('3');
    expect(set.values()).toEqual(['1', '2', '3']);
});
