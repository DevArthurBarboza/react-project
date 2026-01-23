import CategoryListItem from "./CategoryList/Item";
import type { Category } from "../../../types/Category";

type Props = {
    categoryList : Category[]
}

export default function CategoryList({categoryList} : Props) {

    return (
        <>
            {categoryList.map((category : Category) => {
                <CategoryListItem key={category.id} category={category} />
            })}
        </>
    );
}