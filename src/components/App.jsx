import { RecipeList } from 'components/RecipeList';
import recipes from 'components/recipes.json';

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
};
