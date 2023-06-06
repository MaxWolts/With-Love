import React from 'react'
import './style.css'

export const Footer = () => {
  return (
    <div className='Footer'>
        <h2>About this project</h2>
        <p>This project was maked to practice <strong>Machine State</strong> in React using <strong>XState</strong>.</p>
        <div>
            <h3>What are a machine state and XState?</h3>
            <p>The Machine State is a computational model that has a series of states that you can move through using transitions. If you have the same entry, you will always get the same result.
            </p>
            <p>XState is a JavaScript library for managing state and state machines in applications. It provides a powerful and declarative way to model and manage the state of your application using finite state machines (FSMs).
              If you want to know more about the XState you can see my <a href='https://valley-badger-d1d.notion.site/State-Machines-en-React-js-68eaa0b312854e9c9d3efa9bcb07c20f' target="_blank" rel="noopener noreferrer">notes</a> in notion.</p>
        </div>
    </div>
  )
}