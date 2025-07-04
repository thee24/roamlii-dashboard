import {ToolCardInfo} from "@/app/utils/interfaces";
import * as Icons from "lucide-react";
import {LucideIcon} from "lucide-react";

export default function ToolCard({icon, title, description}: ToolCardInfo) {
    const iconText = icon ?? "Circle";
    const Icon = ((Icons as unknown) as Record<string, LucideIcon>)[iconText] ?? Icons.Circle;

    return (<div className="flex rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 flex items-center justify-center bg-primary/10 rounded-l-xl">
                <Icon className="w-6 h-6 text-primary"/>
            </div>
            <div className="flex flex-col justify-center p-6 flex-grow">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>);
}
