import { GetServerSideProps } from 'next';

type DemoPageProps = {
    data: string;
}

const DemoPage = ({ data }: DemoPageProps) => {
    return (
        <div>
            {data}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const data = await new Promise<string>((resolve) => {
        setTimeout(() => resolve('new data'), 2000)
    })
    return {
        props:{
            data
        }
    }
}

export default DemoPage