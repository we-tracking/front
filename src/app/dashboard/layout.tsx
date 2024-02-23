
import { HeaderDashboard } from "@/components/dashboard/Header";
import { SideBarDashboard } from "@/components/dashboard/SideBarDashboard";
import { Provider } from "@/utils/Provider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <Provider>
      <div className="flex">
        <SideBarDashboard />
        <div className="w-full max-w-[960px] mx-auto">
          <HeaderDashboard />
          {children}
        </div>
      </div>
    </Provider>
  );
}
