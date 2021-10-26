import {get, post, put, deletes } from "./http";

export const getFun = formData => get("function/getFun", formData);
