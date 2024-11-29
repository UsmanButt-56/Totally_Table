import React,{useState} from 'react'
import Grids from './Grids/Grids';
import Friends_Data from './Friends_Data/Friends_Data';
import List from './List/List';
function Friends() {
    const [onButton ,setOnButton] = useState(true);
    const listed = () =>
    {
        setOnButton(true);
    }
    const showFriendsData = () =>
    {
        setOnButton(false);
    }
    return (
        <>
            <Grids listed={listed} showFriendsData={showFriendsData} isListSelected={onButton} />
            {/* <Friends_Data /> */}
            {/* <List /> */}
            {
                onButton ?  <List /> : <Friends_Data />
            }
        </>
    )
}

export default Friends;