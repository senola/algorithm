import LRUCache from '../../../../src/algorithms/cache/lru';

test('01、LRU缓存：set()', ()=> {
    const lruCache = new LRUCache(3);

    expect(lruCache.head).toBe(undefined);
    expect(lruCache.tail).toBe(undefined);
    expect(lruCache.size).toBe(0);

    lruCache.set('a', 1);

    expect(lruCache.head.value).toBe(1);
    expect(lruCache.head.next).toBe(undefined);
    expect(lruCache.head.prev).toBe(undefined);
    expect(lruCache.size).toBe(1);

    lruCache.set('a', 2);

    expect(lruCache.head.value).toBe(2);
    expect(lruCache.head.next).toBe(undefined);
    expect(lruCache.head.prev).toBe(undefined);
    expect(lruCache.size).toBe(1);

    lruCache.set('b', 3);

    expect(lruCache.head.value).toBe(3);
    expect(lruCache.head.prev.value).toBe(2);
    expect(lruCache.head.next).toBe(undefined);
    expect(lruCache.size).toBe(2);
    expect(lruCache.tail.prev).toBe(undefined);
    expect(lruCache.tail.value).toBe(2);
    expect(lruCache.tail.next.value).toBe(3);

    lruCache.set('c', 4);
    lruCache.set('d', 5);

    expect(lruCache.size).toBe(3);
    expect(lruCache.head.value).toBe(5);
    expect(lruCache.head.prev.value).toBe(4);

});


test('02、LRU缓存：get()', ()=> {
    const lruCache = new LRUCache(4);

    lruCache.set('b', 'b');
    lruCache.set('c', 'c');
    lruCache.set('d', 'd');
    lruCache.set('e', 'e');

    expect(lruCache.get('c').value).toBe('c');
    expect(lruCache.get('c').value).toBe('c');
    expect(lruCache.get('d').value).toBe('d');
    expect(lruCache.get('d').value).toBe('d');
    expect(lruCache.get('e').value).toBe('e');
    expect(lruCache.get('b').value).toBe('b');

    const lruCache2 = new LRUCache();

    expect(lruCache2.limit).toBe(10);
});
