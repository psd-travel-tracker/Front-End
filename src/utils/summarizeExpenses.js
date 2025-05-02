import { categoryMap } from "./categoryMap";

export function summarizeExpensesByCategory(expenses) {
    const totals = {};

    expenses.forEach((exp) => {
        const label = categoryMap[exp.categoryId] || "Other";
        totals[label] = (totals[label] || 0) + Number(exp.cost);
    });

    // Ensure every category is represented, even if zero
    Object.values(categoryMap).forEach((label) => {
        if (!totals[label]) {
            totals[label] = 0;
        }
    });

    return Object.entries(totals).map(([name, value]) => ({
        name,
        value,
    }));
}
