import { useEffect } from 'react';

import { Layout } from 'components/bilibili';


export default Index;

function Index() {

    useEffect(() => {
        console.log("这是钩子的生命周期？")
    }, []);



    return (
        <Layout>
            <h1>直播数据</h1>

        </Layout>
    );
}
