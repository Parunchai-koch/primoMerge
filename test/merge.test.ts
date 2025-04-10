import { describe, it, expect } from 'vitest'
import { merge } from '../src/merge'

describe('merge()', () => { 
  it('should merge multiple collections and return them in sorted order', () => { 
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [10, 9, 7, 0];
    expect(merge(collection_1, collection_2 ,collection_3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9, 10]);
  });
});
