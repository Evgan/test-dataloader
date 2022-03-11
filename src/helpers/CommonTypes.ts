import {Action} from "redux"

export type Nullable<T> = null | T


/**
 *
 */
export interface IAction<T,P> extends Action {
    readonly type: T,
    payload?: P
}

/**
 * @return тип, поля которого (опциональные - знак ?) это переданные ключи - T? а тип полей -P
 * @example
 type Dirs = {
    a: number,
    b: string,
    c: Array<object>
 }
 type DirsKey = keyof Dirs
 const result: KeysToOptionType<DirsKey, string> = {}
 // type of result:
 // {
 //    a?: string,
 //    b?: string,
 //    c?: string
 // }
 */
export type KeysToOptionType<T extends string | number | symbol, P> = Partial<Record<T, P>>
