"use client"
import {Switch} from "@/components/ui/switch";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CARD_INFO, PLAN_CARD_INFO, TOOL_CARD_INFO} from "@/app/utils/constants";
import PlanCard from "@/app/components/plan-card/plan-card";
import {CardInfo, PlanCardInfo, ToolCardInfo} from "@/app/utils/interfaces";
import {useState} from "react";
import InfoCard from "@/app/components/info-card/info-card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {IconArrowNarrowRight} from "@tabler/icons-react";
import ToolCard from "@/app/components/tool-card/tool-card";
import {ModeToggle} from "@/app/components/mode-toggle";
import {CircleCheck} from "lucide-react";
import {Toaster} from "sonner";
import Link from "next/link";

export default function ToolsDashboard() {
    const [isMonthly, setIsMonthly] = useState(true);

    return (<main className="flex-1 bg-muted/50 py-8 px-4 sm:px-6 md:px-10 w-full">
            <Toaster richColors position="top-center"/>

            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-2">
                    <ModeToggle/>
                    <h1 className="text-3xl font-bold tracking-tight">Tools Dashboard</h1>
                    <p className="text-muted-foreground">
                        Explore our suite of tools designed to help your business grow and succeed in the digital
                        landscape.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                    {CARD_INFO.map((cardInfo: CardInfo) => (<InfoCard key={cardInfo.title} {...cardInfo} />))}
                </div>

                <Tabs defaultValue="Lead Management System" className="w-full">
                    <div className="w-full max-w-md mx-auto">
                        <TabsList
                            className="grid grid-cols-2 w-full h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
                            <TabsTrigger value="Lead Management System"
                                         className="text-sm px-3 py-1 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">
                                Lead Management System
                            </TabsTrigger>
                            <TabsTrigger value="Discovery Suite"
                                         className="text-sm px-3 py-1 rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow">
                                Discovery Suite
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* LMS Tab */}
                    <TabsContent value="Lead Management System" className="space-y-8 pt-6">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span
                                    className={isMonthly ? "font-medium" : "text-muted-foreground"}>Monthly Billing</span>
                                <Switch checked={!isMonthly} onCheckedChange={() => setIsMonthly(!isMonthly)}/>
                                <span
                                    className={!isMonthly ? "font-medium" : "text-muted-foreground"}>Yearly Billing</span>
                                {!isMonthly && (
                                    <Badge className="text-semi-bold bg-secondary text-background">Save up to
                                        $780/year</Badge>)}
                            </div>
                            <p className="text-sm text-muted-foreground text-center">Choose your LMS Membership
                                Plan.</p>
                        </div>

                        {/* Top 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PLAN_CARD_INFO.slice(0, 3).map((planCardInfo: PlanCardInfo) => (
                                <PlanCard key={planCardInfo.title} {...planCardInfo} isMonthly={isMonthly}/>))}
                        </div>

                        {/* Bottom 2 Cards */}
                        <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto px-4">
                            {PLAN_CARD_INFO.slice(3).map((planCardInfo: PlanCardInfo) => (
                                <div key={planCardInfo.title} className="w-full max-w-3xl">
                                    <PlanCard {...planCardInfo} isMonthly={isMonthly}/>
                                </div>))}
                        </div>


                    </TabsContent>

                    {/* Discovery Suite */}
                    <TabsContent value="Discovery Suite" className="space-y-8 pt-6">
                        <div className="text-center space-y-2 max-w-xl mx-auto">
                            <h2 className="text-3xl font-bold">The Discovery Suite (100% free)</h2>
                            <p className="text-muted-foreground">
                                Explore our collection of free tools designed to help your business get discovered by
                                travelers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {TOOL_CARD_INFO.map((toolCardInfo: ToolCardInfo) => (
                                <ToolCard key={toolCardInfo.title} {...toolCardInfo} />))}
                        </div>

                        <div className="bg-muted/30 rounded-lg p-6 max-w-3xl mx-auto">
                            <div className="flex items-center gap-4 mb-4">
                                <CircleCheck className="h-8 w-8 text-green-500"/>
                                <h3 className="text-xl font-semibold">All Included with Your Roamlii Account</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                The Discovery Suite tools are included for free with your Roamlii business account.
                                These tools help increase your visibility and engagement with travelers.
                            </p>
                            <Button>
                                <IconArrowNarrowRight size={20}/>
                                Complete Your Business Profile
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="bg-muted/30 rounded-lg p-6 text-center max-w-3xl mx-auto">
                    <h2 className="text-xl font-bold mb-2">Need Help Choosing the Right Plan?</h2>
                    <p className="text-muted-foreground mb-4">
                        Learn more about our tools and how they can help your business grow. Our team is here to help
                        you make the right choice for your business.
                    </p>
                    <Link href="https://roamlii.com/tools">
                        <Button variant="outline">Learn more</Button>
                    </Link>
                </div>
            </div>
        </main>);
}