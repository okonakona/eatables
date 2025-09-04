export type FoodItem = {
    id: number;
    name: string;
    category: "meat" | "fish" | "fruit" | "vegetable" | "milk" | "juice" | "snack" | "other";
    exp_points: 1 | 3; // 1か3だけ
    is_priority: boolean;
    message: string;
    family_id: number;
    created_at: string; // ISO文字列で返ってくることが多い
    updated_at: string;
    delete_flag: boolean;
};