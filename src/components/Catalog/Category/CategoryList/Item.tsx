import type { Category } from "../../../../types/Category";

type Props = {
    category : Category
}

export default function Item({category} : Props) {

    return (
        <>
            <li className="category-item">
                {category.name}
            </li>
        </>
    )

}