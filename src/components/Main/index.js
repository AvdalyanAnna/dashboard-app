import React from 'react'
import Dashboard from './Dashboard/dashboard'
import Section2 from './MainSection2'
import Section from './MainSection'
import Profile from './Profile'
import './style.css'
export const Main = () => {
    return (
        <div className='Main'>
            <div className="Main-container">
                <Profile />
                <div className="Main-block">
                    <Dashboard />
                    <div className='section-item'>
                        <Section />
                        <Section2 />
                    </div>

                </div>

            </div>
        </div>
    )
}
