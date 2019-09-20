import { Simple, Bucket } from "./Common";

/**
 * Set of unique elements with generalized API
 */
class Set<T> implements Simple<T>, Bucket<T> {
    map<F>(f: (value: T, collection: this) => F): Set<F> {
        throw new Error("Method not implemented.");
    }    
    flatMap<F>(f: (value: T, collection: this) => Set<F>): Set<F> {
        throw new Error("Method not implemented.");
    }
    forEach(f: (value: T, collection: this) => void): this {
        throw new Error("Method not implemented.");
    }
    reduce<F>(f: (accum: this, value: T, collection: F) => this, init?: F): F {
        throw new Error("Method not implemented.");
    }
    update(f: (value: T, collection: this) => T): this {
        throw new Error("Method not implemented.");
    }
    partition(f: (value: T, collection: this) => boolean): [this, this] {
        throw new Error("Method not implemented.");
    }
    filter(f: (value: T, collection: this) => boolean): this {
        throw new Error("Method not implemented.");
    }
    all(f: (value: T, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    any(f: (value: T, collection: this) => boolean): boolean {
        throw new Error("Method not implemented.");
    }
    merge(
        takeIfExistsAtThis: (value: T, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, collection: this) => boolean, 
        that: this
    ): this {
        throw new Error("Method not implemented.");
    }
    combine(
        takeIfExistsAtThis: (value: T, collection: this) => boolean, 
        takeIfExistsAtBoth: (value: T, collection: this) => boolean, 
        takeIfExistsAtThat: (value: T, collection: this) => boolean, 
        that: this
    ): this {
        throw new Error("Method not implemented.");
    }
    add(value: T): this {
        throw new Error("Method not implemented.");
    }
    remove(value: T): this {
        throw new Error("Method not implemented.");
    }
    clone(): this {
        throw new Error("Method not implemented.");
    }
    has(v: T): boolean {
        throw new Error("Method not implemented.");
    }
}