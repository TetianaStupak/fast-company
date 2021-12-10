import React, { useState } from "react"
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) =>
        setUsers(users.filter((user) => user._id !== userId));

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        console.log(lastOne);

        if (number > 4 && number < 15) return "Человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанут";
        if (lastOne === 1) return "Человек тусанет";

    };
    return (
        <>
            <h2><span className={
                "bange bg-" +
                (users.length > 0 ? "primary" : "danger")
            }
            >
                {users.length > 0
                    ? `${users.length} ${renderPhrase(
                        users.length
                    )} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span></h2>
            {users.length > 0 &&
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Qualities</th>
                            <th scope="col">Profession</th>
                            <th scope="col">CompletedMeetings</th>
                            <th scope="col">Rate</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    {user.qualities.map((item) => (
                                        <span
                                            className={"badge m-1 bg-" + item.color}
                                            key={item._id}>{item.name}
                                        </span>
                                    ))}
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}</td>
                                <td>
                                    <button className={"btn btn-danger"} onClick={() => handleDelete(user._id)}>
                                        Delete
                                    </button></td>
                            </tr>
                        ))}
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>}
        </>
    );
};

export default Users;