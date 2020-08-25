import Map from '../../../src/data-structures/map/map';

test('01、空map', ()=> {
    const map = new Map();

    expect(map.size()).toEqual(0);
    expect(map.hasKey('1')).toEqual(false);
    expect(map.get('1')).toEqual(undefined);
    expect(map.remove('1')).toEqual(false);
    expect(map.isEmpty()).toEqual(true);
    expect(map.toString()).toEqual('');
});

test('02、set()', ()=> {
    const map = new Map();

    map.set('1', 33);
    map.set('2', 23);
    map.set('3', 435);
    map.set('4', 323423);

    expect(map.size()).toEqual(4);
    expect(map.hasKey('1')).toEqual(true);
    expect(map.get('1')).toEqual(33);
    expect(map.remove('1')).toEqual(true);
    expect(map.size()).toEqual(3);
    expect(map.isEmpty()).toEqual(false);
    expect(map.toString()).toEqual('[2: 23],[3: 435],[4: 323423]');
});
test('02、keyValues()', ()=> {
    const map = new Map();

    map.set('1', 33);
    map.set('2', 23);
    expect(map.set(null, null)).toEqual(false);
    expect(map.keyValues()).toEqual([{key: '1',
        value: 33}, {key: '2',
        value: 23}]);
    expect(map.keys()).toEqual(['1', '2']);
    expect(map.values()).toEqual([33, 23]);

    map.clear();
    expect(map.size()).toEqual(0);
    expect(map.hasKey('1')).toEqual(false);
    expect(map.get('1')).toEqual(undefined);
    expect(map.remove('1')).toEqual(false);
});

