import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div>


                <table >
                    <thead>
                        <tr>
                            <th>Name</th>

                        </tr>
                        <tr>
                            <td>E-mail</td>

                        </tr>
                    </thead>
                    <tbody>

                        {this.renderRows()}
                    </tbody>

                </table>


            </div>


        )






    }

    componentDidMount() {
        fetch('/Dashboard.php')
            .then(response => response.json())
            .then(json => {

                this.renderRows(json);
                console.log(json);

            })
    }
    renderRows(users) {
        return users.map(function (user, i) {
            return (
                <tr>
                    <td>
                        <input
                            type="text"
                            value={user.name}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={user.email}
                        />
                    </td>
                </tr>
            );
        });
    }




}


export default Dashboard
