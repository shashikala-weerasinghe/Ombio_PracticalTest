import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <form action="/index.php" method="post">
                    <label for="username">username:</label>
                    <input type="text" id="username" name="username" value="" /><br></br>
                    <label for="password">password</label>
                    <input type="password" id="password" name="password" value="" />

                    <input type="submit" value="Submit" />

                </form>
            </div>
        )

    }

}
export default Login