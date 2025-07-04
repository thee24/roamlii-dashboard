import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {ArrowRight, Check, Info} from "lucide-react";
import {OneOffPlan, Plan, PlanCardInfo, RecurringPlans} from "@/app/utils/interfaces";
import {Badge} from "@/components/ui/badge";
import ToastButton from "@/app/components/toast-button";
import * as Icons from 'lucide-react';
import {BLOG_ADD_ON_LIST} from "@/app/utils/constants";

interface PlanCardProps extends PlanCardInfo {
    isMonthly: boolean;
}

export default function PlanCard({isMonthly, ...planCardInfo}: PlanCardProps) {
    const {planInfo} = planCardInfo;
    const iconName = (planCardInfo?.buttonData?.icon ?? "Circle") as keyof typeof Icons;

    const isRecurringPlans = (planInfo:  RecurringPlans | OneOffPlan): planInfo is { monthlyPlan: Plan; yearlyPlan: Plan } => {
        return planInfo && "monthlyPlan" in planInfo && "yearlyPlan" in planInfo;
    };

    const isOneOffPlan = (planInfo:  RecurringPlans | OneOffPlan): planInfo is { oneOffPlan: Plan } => {
        return planInfo && "oneOffPlan" in planInfo;
    };

    const savings = isRecurringPlans(planInfo) ? planInfo.monthlyPlan.price * 12 - planInfo.yearlyPlan.price : 0;

    return (<Card className="flex flex-col h-full">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{planCardInfo.title}</CardTitle>
                    {planCardInfo.includesFreeSummitPlan && (
                        <Badge className="font-semibold bg-green-50 text-green-700 border-green-200">
                            Includes FREE Summit Plan for 1 Year
                        </Badge>)}
                </div>

                {isRecurringPlans(planInfo) && (<CardDescription>
            <span className="text-3xl font-bold">
              {isMonthly ? `${planInfo.monthlyPlan.currency}${planInfo.monthlyPlan.price}` : `${planInfo.yearlyPlan.currency}${planInfo.yearlyPlan.price}`}
            </span>{" "}
                        / {isMonthly ? planInfo.monthlyPlan.duration : planInfo.yearlyPlan.duration}
                        {!isMonthly && savings > 0 && (<div>
                                <Badge className="font-semibold bg-green-50 text-green-700 border-green-200">
                                    You will save {planInfo.monthlyPlan.currency}
                                    {savings}
                                </Badge>
                            </div>)}
                    </CardDescription>)}

                {isOneOffPlan(planInfo) && (<CardDescription>
            <span className="text-3xl font-bold">
              {planInfo.oneOffPlan.currency}
                {planInfo.oneOffPlan.price}
            </span>{" "}
                        one-off
                    </CardDescription>)}

                <p className="text-sm text-muted-foreground mt-2">
                    {planCardInfo.description}
                </p>

                {planCardInfo.includesFreeSummitPlan && (<div className="bg-muted/30 p-4 rounded-md mb-6">
                        <h2 className="font-medium">
                            Includes a FREE one year subscription of our Summit Digital Growth
                            plan!
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {planCardInfo.extraDescription}
                        </p>
                        <p className="text-sm font-medium text-green-600 mt-2">
                            Savings of over $3,900
                        </p>
                    </div>)}
            </CardHeader>

            <CardContent className="flex-1">
                {planCardInfo.featureList && (<>
                        <h4 className="font-medium mb-2">
                            {planCardInfo.includesFreeSummitPlan ? "What's Included:" : "Includes:"}
                        </h4>
                        <ul className="mb-4 list-none pl-0 text-sm text-foreground">
                            {planCardInfo.featureList.map((feature, index) => (<li
                                    key={index}
                                    className="flex items-start gap-2 text-sm pb-2"
                                >
                                    <Check className="text-primary" size={16}/>
                                    {feature}
                                </li>))}
                        </ul>
                    </>)}

                {planCardInfo.similarToolList && (<>
                        <h4 className="font-medium mb-2">Similar:</h4>
                        <ul className="mb-4 list-none pl-0 text-sm text-muted-foreground">
                            {planCardInfo.similarToolList.map((tool, index) => (<li
                                    key={index}
                                    className="flex items-start gap-2 text-sm pb-2"
                                >
                                    <Info className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground"/>
                                    {tool}
                                </li>))}
                        </ul>
                    </>)}

                {planCardInfo.addOnList && (<>
                        <h4 className="font-medium mb-2">Add-on Services:</h4>
                        <ul className="mb-4 list-none pl-0 font-medium">
                            {planCardInfo.addOnList.map((addOn, index) => (<li
                                    key={index}
                                    className="flex items-start gap-2 text-sm pb-2"
                                >
                                    <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground"/>
                                    {addOn}
                                </li>))}
                        </ul>
                        <ul className="mb-4 list-none pl-10 font-normal">
                            {BLOG_ADD_ON_LIST.map((addOn, index) => (<li key={index} className="text-sm pb-2">
                                    {addOn}
                                </li>))}
                        </ul>
                    </>)}

                {!planCardInfo.includesFreeSummitPlan && planCardInfo.extraDescription && (
                    <p className="text-sm text-foreground">
                        {planCardInfo.extraDescription}
                    </p>)}
            </CardContent>


        <CardFooter className="border-t pt-4">
                <ToastButton
                    iconName={iconName}
                    text={planCardInfo?.buttonData?.text ?? ""}
                    toastMessage="Added to cart"
                    description="The selected plan has been added to your cart."
                />
            </CardFooter>
        </Card>);
}
