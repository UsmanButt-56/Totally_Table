import React from 'react';
import Edit from './Edit/Edit';
import Update from './Update/Update';
function Profile() {
    return (
     <>
     <Edit name="Edit your profile" btn_name="View profile" />
     <Update />
     </>
    )
}

export default Profile;