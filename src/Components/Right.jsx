import React from 'react'



const Right = ({menuData}) => { 

        return (
            
            <div className='row m-2'>
            
               {menuData.map(function (elem) {
                   const {id,image,name,category,price,description}=elem
                   return(
                <div className='col-3 py-2' key={id} style={{backgroundColor :"#ece9e9"}}>
                    <div className="card-deck myborder ">
                        <div className="card">                        
                            <img className="card-img-top" src={image} height="300px" alt="Card image cap" />
                            <div className="card-body">
                            
                                <h5 className="card-title">{name} <small className="text-muted">{price}</small></h5>
                                
                                <p className="card-text">{description}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{category}</small>
                            </div>
                        </div>
                    </div>
                </div>
                )
                
            })
        }
            </div>
        )
    
    
}

export default Right