// https://www.jianshu.com/p/e87e596c3280
// mv testJS.js testJS.ts
// tsc -d testJS.ts
// 修改tsconfig.json，包含testJS.d.ts所在的文件夹

declare function multiply(a: any, b: any): number;
declare var Calculator: {
    multiply: (a: any, b: any) => number;
    sum: (a: any, b: any) => any;
};
