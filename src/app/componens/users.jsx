import React, { useState } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/pagination";
import Pagination from "./pagination";
import User from "./user";
import api from "../api";
import GroupList from "./groupList";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions] = useState(api.professions.fetchAll());
    const count = allUsers.length;
    const pageSize = 4;

    const handleProfessionSelect = (params) => {
        console.log(params);
    };
    console.log(professions);
    const handlePageChange = (pageIndex) => {
        console.log("page:", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(allUsers, currentPage, pageSize);

    return (
        <>
            <GroupList items={professions} onItemSelect={handleProfessionSelect} />
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User {...rest} {...user} key={user._id} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array
};

export default Users;
