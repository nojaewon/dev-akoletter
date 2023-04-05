// antd
import { Breadcrumb } from 'antd';

// style
import '../css/BreadCrumbContainer.css';


function BreadcrumbContainr({links}){
    return (
        <nav className='header-padding breadcrumb'>
            <Breadcrumb
                separator=">"
                items={links}
            />
        </nav>
    );
}

export default BreadcrumbContainr;