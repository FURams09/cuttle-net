import { GetServerSideProps } from 'next';
import { fakeFetcher } from '@/app/lib'

type DemoPageProps = {
    data: string;
}

const DemoPage = ({ data }: DemoPageProps) => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {data}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await fakeFetcher()
    return {
        props:{
            data
        }
    }
}

export default DemoPage