type PropsType = {
  category: string;
}

const Category = ({category}: PropsType) => {
  return (
    <div className={`category-label ${category.toLowerCase()}`}>
      {category}
    </div>
  );
};

export default Category;
