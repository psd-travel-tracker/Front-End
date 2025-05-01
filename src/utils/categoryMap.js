// mapping of categoryId to category name
export const categoryMap = {
    1: "Transportation",
    2: "Food",
    3: "Lodging",
    4: "Entertainment",
    5: "Other"
  };
  
  //dropdown options to numbers for adjustment of categories
  export const reverseCategoryMap = Object.entries(categoryMap).reduce((acc, [id, name]) => {
    acc[name] = parseInt(id);
    return acc;
  }, {});
  