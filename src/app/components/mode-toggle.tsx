"use client";

import {useTheme} from "next-themes";
import {JSX, useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";

export function ModeToggle(): JSX.Element | null {
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    const icon: JSX.Element = isDark ? (<Sun className="h-5 w-5"/>) : (<Moon className="h-5 w-5"/>);

    return (<Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {icon}
        </Button>);
}
