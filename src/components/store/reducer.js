export const initalState = {
    user: null,
    messages:[], 
    properties:[],
    userData: []
  }
  //get the subtotal for the basket 
  // creating the reducer function 
  export default function reducer(state, action)  {
      console.log(action)
      switch(action.type) {
          case 'SET_USER':
              return {
                  ...state,
                  user: action.user
              }
          case 'ADD MESSAGES':
              return {
                  // need to return the new data layer so that its different
                  ...state ,
                  messages: [...state.messages, action.item]
              }
          case 'REMOVE_FROM_MESSAGES':
              //made a new basket 
              let newMessages = [...state.messages]
              // find the index of the deleted item
              const index = state.messages.findIndex((messageItem) => messageItem.id === action.id)
              // if its = to zero its true 
              if(index >=0){
                  //item exists in basket , remove it 
                  // cut it out at the index of the item, and only that itme 
                  newMessages.splice(index, 1)
              }else {
                  console.warn(`cant remove product (id:${action.id} its not there)`)
              }
              //returning all the state with the newbasket with the removed items
              return {...state, messages: newMessages }
        case 'ADD PROPERTY': 
              return {
                  // bring in the next layer of datat after the messages that are there
                ...state,
                  properties: [...state.properties, action.item]
              }
        
        case 'REMOVE PROPERTY': 
           
                 const newProperty = [...state.properties];
              // now need to get the index of the specific property needed to be removed
                const propertyIndex = state.properties.findIndex((propertyItem) => propertyItem.id === action.id)
            // now need to conditionally render the index based on if the indexy is greater than or equal to 0 so as long as its not -1 then we be good
                    if(propertyIndex >= 0){
                // property exists
                         newProperty.splice(propertyIndex,1)
                     } else {
                        console.warn(`cant remove the property (id: ${action.id} doesnt exist in the store sorry not sorry.)`)
                    }
                    break;
        case 'ADD USER_DATA': 
              return {
                  // bring in the next layer of datat after the messages that are there
                ...state,
                  userData: [...state.userData, action.item]
              }
        case 'REMOVE USER_DATA': 
           
                 const newUserData = [...state.userData];
              // now need to get the index of the specific property needed to be removed
                const userIndex = state.userData.findIndex((propertyItem) => propertyItem.id === action.id)
            // now need to conditionally render the index based on if the indexy is greater than or equal to 0 so as long as its not -1 then we be good
                    if(userIndex >= 0){
                // property exists
                         newUserData.splice(propertyIndex,1)
                     } else {
                        console.warn(`cant remove the property (id: ${action.id} doesnt exist in the store sorry not sorry.)`)
                    }
                break;
                
        default: 
          return state;
      }
  }