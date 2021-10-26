import {get, post, put, deletes } from "./http";

export const getFun = formData => get("function/getFun", formData);
export const saveStr = formData => post("/redis/saveStr", formData);
export const getStr = formData => post("/redis/getStr", formData);
