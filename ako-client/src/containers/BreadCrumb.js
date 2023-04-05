import { Breadcrumb } from 'antd';

function BreadcrumbContainr({separator}){

    return (
        <Breadcrumb
        items={[
        {
            title: 'Home',
        },
        {
            title: 'Application Center',
            href: '',
        },
        {
            title: 'Application List',
            href: '',
        },
        {
            title: 'An Application',
        },
        ]}
    />
    );
}

export default BreadcrumbContainr;