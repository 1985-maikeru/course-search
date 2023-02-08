/*
 * Define type for Object.keys
 */
type ObjectKeys<T> = T extends object
    ? (keyof T)[]
    : T extends number
    ? []
    : T extends Array<any> | string
    ? string[]
    : never;

/**
 * Define type for Object prototypes
 */
interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
}

/**
 * Reveal Object properties type recursively
 * (Support serializable data only)
 */
type Expand<T> = T extends object
    ? T extends infer O
        ? { [K in keyof O]: Expand<O[K]> }
        : never
    : T;

/**
 * Reveal Object properties type only first nested
 * (Support unserializable data)
 */
type ShallowExpand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

/**
 * Any Object - extends type any
 */
interface ANY_OBJECT<PROPERTY_TYPE = any> {
    [key: string]: PROPERTY_TYPE;
}

/**
 * React setState hook Fn
 */
type SET_STATE<T> = React.Dispatch<React.SetStateAction<T>>;

/**
 * onClick Event
 */
type ONCLICK<T = HTMLElement> = React.MouseEventHandler<T, MouseEvent>;

/**
 * onChange Event
 */
type ONCHANGE<T = HTMLElement> = React.ChangeEvent<T>;

/**
 * FixedArray
 * @description Array with Fixed length
 */
type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends (
    ...a: infer X
) => void
    ? X
    : never;
type GrowToSize<T, A extends Array<T>, N extends number> = {
    0: A;
    1: GrowToSize<T, Grow<T, A>, N>;
}[A["length"] extends N ? 0 : 1];
type FixedArray<T, N extends number> = GrowToSize<T, [], N>;
