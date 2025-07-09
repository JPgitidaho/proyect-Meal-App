import CategoryList from "../cards/CategoryList";
import RandomRecipes from "../cards/RandomRecipes";

export default function Home() {
  return (
    <div className="p-8 space-y-12">
      <CategoryList />
      <RandomRecipes />
    </div>
  );
}
