import { Navibar } from "@/components/Navibar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // bg-gradient-to-b from-blue-100 to-red-100
    <Navibar>{children}</Navibar>
  );
}
