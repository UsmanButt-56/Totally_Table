import React from 'react'
import Edit from '../Profile/Edit/Edit';
import Tabs from './Tabs/Tabs';
import Privacy from './Tabs/Privacy/Privacy';

function Settings() {
  return (
    <>
    <Edit name="Settings" btn_name="Save all changes" />
    <Tabs />
    <Privacy />
    </>
  )
}

export default Settings;