import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Expenses',
        path: '/expenses',
        icon: <FaIcons.FaHandHoldingUsd />,
        cName: 'nav-text'
    },
    {
        title: 'Budget',
        path: '/budget',
        icon: <IoIcons.IoIosCalculator />,
        cName: 'nav-text'
    },
    {
        title: 'Accounts',
        path: '/accounts',
        icon: <IoIcons.IoIosAlbums />,
        cName: 'nav-text'
    },
    {
        title: 'Savings',
        path: '/savings',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Signout',
        path: '/signin',
        icon: <FaIcons.FaShareSquare />,
        cName: 'nav-text'
    },
]
