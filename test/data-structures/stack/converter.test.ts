import converter from '../../../src/data-structures/stack/converter';

test('01、十进制转二进制', ()=> {
    expect(converter(0, 2)).toEqual('0');
    expect(converter(1, 2)).toEqual('1');
    expect(converter(2, 2)).toEqual('10');
    expect(converter(3, 2)).toEqual('11');
    expect(converter(10, 2)).toEqual('1010');
    expect(converter(100345, 2)).toEqual('11000011111111001');
});

test('02、十进制转八进制', ()=> {
    expect(converter(0, 8)).toEqual('0');
    expect(converter(1, 8)).toEqual('1');
    expect(converter(9, 8)).toEqual('11');
    expect(converter(100, 8)).toEqual('144');
    expect(converter(1000, 8)).toEqual('1750');
});

test('02、十进制转十六进制', ()=> {
    expect(converter(0, 16)).toEqual('0');
    expect(converter(1, 16)).toEqual('1');
    expect(converter(18, 16)).toEqual('12');
    expect(converter(100, 16)).toEqual('64');
    expect(converter(1000, 16)).toEqual('3E8');
    expect(converter(1000, 39)).toEqual('');
});
