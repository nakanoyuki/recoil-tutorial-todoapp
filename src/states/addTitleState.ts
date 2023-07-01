import { atom, selector } from "recoil";
import { Task } from "../types/Task";

export const addTitleState = atom<Array<Task>>({
  key: "addTitleState",
  default: [],
});

// atomの中になんらかの操作を行いたい(非同期処理・配列の長さの指定など)ときはSelecterを使う

export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  // 長さを取得
  get: ({ get }) => {
    const addTitleNumber: Array<Task> = get(addTitleState);
    return addTitleNumber?.length || 0;
  },
});
