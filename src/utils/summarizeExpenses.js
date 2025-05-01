import { categoryMap } from "./categoryMap";

export function summarizeExpensesByCategory(expenses) {
  const totals = expenses.reduce((acc, expense) => {
    const label = categoryMap[expense.categoryId] || "Other";
    acc[label] = (acc[label] || 0) + Number(expense.cost);
    return acc;
  }, {});

  return Object.entries(totals).map(([name, value]) => ({
    name,
    value
  }));
}
