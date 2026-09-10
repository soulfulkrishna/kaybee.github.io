import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { getSiteUrl } from "@/lib/env";
const siteUrl=getSiteUrl();
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"Krishna Bhatia — KB/91 Research Workstation",template:"%s — KB/91"},description:"Krishna Bhatia's research portfolio in quantum machine learning, scientific ML, research engineering, and quantum technology policy.",alternates:{canonical:"/"},robots:{index:true,follow:true},openGraph:{title:"KB/91 Research Workstation",description:"Research portfolio of Krishna Bhatia.",url:siteUrl,type:"website"}};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
