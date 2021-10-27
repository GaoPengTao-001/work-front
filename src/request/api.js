import {get, post, put, deletes } from "./http";

export const getFun = formData => get("/function/getFun", formData);
export const saveStr = formData => post("/redis/saveStr", formData);
export const getStr = formData => post("/redis/getStr", formData);
export const lSet = formData => post("/redis/lSet", formData);
export const lGet = formData => post("/redis/lGet", formData);
export const hmGet = formData => post("/redis/hmGet", formData);
export const hmSet = formData => post("/redis/hmSet", formData);
export const sSet = formData => post("/redis/sSet", formData);
export const sGet = formData => post("/redis/sGet", formData);
export const zsAdd = formData => post("/redis/zsAdd", formData);
export const zsGet = formData => post("/redis/zsGet", formData);
