
// ЧТО БЫ МОЖНО БЫЛО ИПОРТИРОВАЙТЬ ФАЙЛ:
// import s from './content.module.scss'

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}
