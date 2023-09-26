import { use } from "chai";
import { type } from "node:os";
import fetch from "node-fetch";
import { as } from "vitest/dist/reporters-5f784f42";

export function lengthStr(str: string): number {
  return str.length;
}
export function checkIfPalindrome(str: string): boolean {
  let isPalindrome = true;
  if (str.length == 0 || str.length == 1) {
    isPalindrome = false;
    return isPalindrome;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindrome = false;
      return isPalindrome;
    }
  }
  return isPalindrome;
}
export function sortArray(arr: number[]): number[] {
  if (arr.length == 0 || arr.length == 1) {
    return [];
  }
  const sortedArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != null) {
      sortedArr.push(arr[i]);
    }
  }
  sortedArr.sort((a, b) => a - b);
  return sortedArr;
}
export function sqrt(num: number): number {
  if (num < 0) {
    return 0;
  }
  return num ** 2;
}
export function sumArray(arr: number[]): number {
  if (arr.length < 0) {
    return 0;
  }
  let counter = 0;
  arr.forEach((count) => (counter += count));
  return counter;
}
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export async function fetchUserData(id: number): Promise<User | null> {
  let userData: User | null = null;
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    userData = (await data.json()) as User;
    console.log(userData);
  } catch {
    console.error("id not found");
  }
  return userData;
}
export function fibonacci(arr: number[]): boolean {
  if (arr.length < 1 || arr[2] != 3) {
    console.error("wrong numbers");
    return false;
  }
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] != arr[i + 2]) {
      return false;
    }
  }

  return true;
}
