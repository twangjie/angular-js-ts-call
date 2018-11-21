//declare function multiply(a: number, b: number): number;


// global javascript function
// https://tatvog.wordpress.com/2016/01/19/typescript-how-to-access-a-global-javascript-function/
interface Window {

  multiply(a: number, b: number): number;

}
