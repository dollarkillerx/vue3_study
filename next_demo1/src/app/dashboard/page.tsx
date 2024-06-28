import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'dashboard',
}

export default function Page() {
    return (
            <h1 className={"text-red-500 text-2xl text-left"}>
                this is dashboard page
            </h1>
    );
}