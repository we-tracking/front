import { Modal } from "@/components/Modal";
import { SideBarDashboard } from "@/components/SideBarDashboard";
import { HeaderDashboard } from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex">
          <SideBarDashboard />
          <div className="w-full max-w-[960px] mx-auto">
            <HeaderDashboard />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
