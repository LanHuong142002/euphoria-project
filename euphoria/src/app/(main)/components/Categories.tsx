// Actions
import { getCategories } from '@/actions';

// Components
import { CategoryItem } from './CategoryItem';

export const Categories = async () => {
  const categories = await getCategories();
  const categoriesData = categories.data;

  return (
    <div>
      {categoriesData.map(({ attributes: { name, value } }) => (
        <CategoryItem key={`category-${value}`} value={value} label={name} />
      ))}
    </div>
  );
};
