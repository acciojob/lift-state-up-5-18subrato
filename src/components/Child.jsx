import React from 'react'

const Child = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? 'You are logged in!' : <div>Username:<input
                type='text'
            />
                Password:<input
                    type='password'
                />
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </div>}
    </div>
    )
}

export default Child
