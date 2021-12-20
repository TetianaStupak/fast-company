import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";

const UserTable = ({ users, onSort, selectedSort, ...rest }) => {
    const columns = {
        name: { iter: "name", name: "Имя" },
        qualities: { name: "Качество" },
        professions: { iter: "profession.name", name: "Професии" },
        completedMeetings: { iter: "completedMeetings", name: " Встретился, раз" },
        rate: { iter: "rate", name: "Оценка" },
        bookmark: { iter: "bookmark", name: "Избранное" },
        delete: {}
    };
    return (
        <table className="table">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody>
        </table>

    );
};
UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.inRequired
};

export default UserTable;
