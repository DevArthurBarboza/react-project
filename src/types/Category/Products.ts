import type { Category } from "../Category";
import Product from "../Product";

export type CategoryProducts = Category & {
    products : Product[]
}