import { CardInfo } from "@/app/utils/interfaces";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import {LucideIcon} from "lucide-react";

export default function InfoCard({ title, description, buttonData }: CardInfo) {
    const iconText = buttonData?.icon ?? "";
    const Icon = ((Icons as unknown) as Record<string, LucideIcon>)[iconText] ?? Icons.Circle;


    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>

            <CardFooter>
                <Button variant="outline" className="w-full justify-center">
                    <Icon />
                    {buttonData?.text}
                </Button>
            </CardFooter>
        </Card>
    );
}
