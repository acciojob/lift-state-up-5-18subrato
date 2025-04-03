import React from 'react'

const Child = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? 'You are logged in!' : <form>Username:<input
                type='text'
            />
                Password:<input
                    type='password'
                />
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </form>}
    </div>
    )
}

export default Child
