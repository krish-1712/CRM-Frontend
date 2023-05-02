
import { Heading } from "../Components/Heading";




export default  function Open({children}) {
 
    return (


     <Heading>
    
        <div className="main-content">
            {children}
          
            <div className='containers'>
                <img src="https://www.cio.com/wp-content/uploads/2023/03/crm_customer-relationship-management-100752744-orig.jpg?quality=50&strip=all" alt="" id ='dot'></img>
        </div>
        </div>
        </Heading>

        

    )
}