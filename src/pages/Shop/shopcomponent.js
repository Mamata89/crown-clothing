import React from 'react'

import SHOP_DATA from './shop_data'
import CollectionPreview  from '../../components/collection-preview/collectionPreview'

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {  collections : SHOP_DATA }
    }
    render(){
        const {collections} = this.state
        return(
            <>
                {collections.map(({id, ...otherscollection}) => (
                    <CollectionPreview  key={id} {...otherscollection}/>
                ))}
            </>
        )
    }
}

export default ShopPage 