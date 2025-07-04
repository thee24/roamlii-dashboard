export type FeatureList = string[]
export type SimilarToolList = string[]
export type AddOnList = string[]
export type PlanDuration = "month" | "year" | "one-off"

export type Currency = "$"

export interface CardInfo {
    title: string
    description: string
    buttonData?: CardButtonData
}

export interface CardButtonData {
    icon?: string
    text: string
}

export interface PlanCardInfo extends CardInfo {
    planInfo: PlanVariations
    featureList?: FeatureList
    similarToolList?: SimilarToolList
    addOnList?: AddOnList
    extraDescription?: string
    includesFreeSummitPlan?: boolean
}

export interface Plan {
    price: number;
    currency: Currency;
    duration?: PlanDuration;
}


export type PlanVariations = RecurringPlans | OneOffPlan;


export interface RecurringPlans {
    monthlyPlan: Plan;
    yearlyPlan: Plan;
}

export interface OneOffPlan {
    oneOffPlan: Omit<Plan, "duration">;
}

export interface ToolCardInfo extends CardInfo {
    icon?: string
}