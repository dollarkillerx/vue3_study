export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <h1 className={"text-4xl text-center text-blue-400"}>this is DashboardLayout</h1>
            {children}
        </section>
    );
}