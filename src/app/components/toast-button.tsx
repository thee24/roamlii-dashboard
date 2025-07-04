'use client';

import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";


interface ToastButtonProps {
    iconName: keyof typeof Icons;
    text: string;
    toastMessage: string;
    description?: string;
}

export default function ToastButton({ iconName, text, toastMessage, description }: ToastButtonProps) {
    const Icon = Icons[iconName] as LucideIcon;

    const handleClick = () => {
        toast(toastMessage, { description });
    };

    return (
        <Button className="w-full" onClick={handleClick} aria-label={text}>
            <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            {text}
        </Button>
    );
}
