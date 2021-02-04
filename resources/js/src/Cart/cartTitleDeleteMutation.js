export default (variables) => {

  return {
    query:`  mutation ($id:Int!){
      deleteCartTitle(id: $id){
                      vendor {
                        carts (first:100){
                         data{
                           INDEX
                            KEY
                            DATE
                            PO_NUMBER
                            TRANSNO
                            REMOTEADDR
                            ISCOMPLETE
                            items{
                              id
                              INDEX
                              PROD_NO
                              TITLE
                              REQUESTED
                              SALEPRICE
                              coverArt
                              AUTHORKEY
                              url
                            }
                         }
                        }
                      }
                    
                  }
            }  
          `, 
    variables: variables
  }
  
  };