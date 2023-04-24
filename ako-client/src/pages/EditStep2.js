// style
import '../css/EditStep2.css';

// containers
import TabsContainer from '../containers/TabsContainer.js';

function EditStep2({script}){

    return (
        <section className="edit-step-box edit-step-2">
            <TabsContainer script={script} />
            <div className='scene'>

            </div>
        </section>
    )
}

export default EditStep2;