import type { GetServerSideProps } from "next"

type PagesRootProps = {
    data: string
}
const PagesRoot = ({data}: PagesRootProps) => {
    return (<div>
        <p color="secondary">Pages Root</p>
        <p color="warning">{data}</p>
    </div>);
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props:{
            data: "Server Props"
        }
    }
}

export default PagesRoot;