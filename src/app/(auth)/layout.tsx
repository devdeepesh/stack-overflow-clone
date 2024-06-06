"use client";

import { useAuthStore } from "@/store/Auth";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const session = useAuthStore(store => store.session);
    const router = useRouter();

    React.useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);

    if (session) {
        return null;
    }

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center py-12">
            <BackgroundBeams />
            <div className="relative">{children}</div>
        </div>
    );
};

export default Layout;
