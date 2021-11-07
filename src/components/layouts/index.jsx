import React, { useContext } from 'react'
import Sidebar from 'components/layouts/sidebar'
import SidebarMobile from 'components/layouts/sidebarMobile'
import Header from 'components/layouts/headers'
import { Hooks } from 'providers'
export default function Index(props) {
    const { toggle } = useContext(Hooks)
    return (
        <div className='layouts'>
            <Header />
            <Sidebar role={localStorage.getItem('token') === 'agent' ? 'agent' : 'customer'} />
            <SidebarMobile data={toggle} />
            <div className="bodyWrap">
                {props.children}
            </div>
        </div>
    )
}
