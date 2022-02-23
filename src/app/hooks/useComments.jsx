import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./useAuth";
import { nanoid } from "nanoid";
// import { toast } from "react-toastify";

const CommentsContext = React.createContext();

export const UseComments = () => {
    return useContext(CommentsContext);
};

export const CommentsProvider = ({ children }) => {
    const { userId } = useParams();
    const { currentUser } = useAuth();
    // const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    // const [error, setError] = useState(null);
    useEffect(() => {
        setComments(null);
    }, []);
    async function createComment(data) {
        const comment = {
            ...data,
            _id: nanoid(),
            pageId: userId,
            created_at: Date.now(),
            userId: currentUser._id
        };
        console.log(comment);
    }
    return (
        <CommentsContext.Provider
            value={{
                comments,
                createComment
            }}
        >
            {children}
        </CommentsContext.Provider>
    );
};

CommentsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
