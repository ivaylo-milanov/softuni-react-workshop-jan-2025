import { useEffect, useState } from "react";
import UserListItem from "./UserListItem";
import userService from "../api/userService";
import Search from "./Search";
import Pagination from "./Pagination";
import CreateEditForm from "./CreateEditForm";
import UserDetails from "./UserDetails";
import DeleteModal from "./DeleteModal";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [isCreateClicked, setIsCreateClicked] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userIdDelete, setUserIdDelete] = useState(null);
    const [userIdEdit, setUserIdEdit] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(setUsers);
    }, [])

    const createClickHandler = () => {
		setIsCreateClicked(true);
	}

	const createCloseHandler = () => {
		setIsCreateClicked(false);
	}

    const detailsClickHandler = (id) => {
        setUserId(id);
    }

    const detailsCloseHandler = () => {
        setUserId(null);
    }

    const deleteClickHandler = (id) => {
        setUserIdDelete(id);
    }

    const deleteCloseHandler = () => {
        setUserIdDelete(null);
    }

    const deleteHandler = async () => {
        await userService.delete(userIdDelete);
        setUsers(state => state.filter(user => user._id !== userIdDelete));
        setUserIdDelete(null);
    }

    const editClickHandler = (id) => {
        setUserIdEdit(id);
    }

    const editCloseHandler = () => {
        setUserIdEdit(null);
    }

    const createFormAction = async (formData) => {
        const values = Object.fromEntries(formData);

        const newUser = await userService.create(values);

        setUsers(prevUsers => [...prevUsers, newUser]);

        setIsCreateClicked(false);
    }

    const updateFormAction = async (formData) => {
        const values = Object.fromEntries(formData);

        const updatedUser = await userService.update(userIdEdit, values);

        setUsers(state => state.map(user => user._id === userIdEdit ? updatedUser : user));

        setUserIdEdit(null);
    }

    return (
        <section className="card users-container">
            <Search />

            {isCreateClicked &&
                <CreateEditForm
                    action={createFormAction}
                    onClose={createCloseHandler}
                />
            }

            {userId !== null && 
                <UserDetails 
                    onClose={detailsCloseHandler}
                    userId={userId}
                />
            }

            {userIdDelete !== null && 
                <DeleteModal 
                    onClose={deleteCloseHandler}
                    onDelete={deleteHandler}
                />
            }

            {userIdEdit !== null &&
                <CreateEditForm 
                    onClose={editCloseHandler}
                    action={updateFormAction}
                    userId={userIdEdit}
                />
            }

            <div className="table-wrapper">

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <UserListItem
                                key={user._id}
                                {...user}
                                onDetailsClick={() => detailsClickHandler(user._id)}
                                onDeleteClick={() => deleteClickHandler(user._id)}
                                onEditClick={() => editClickHandler(user._id)}
                            />)
                        }
                    </tbody>
                </table>
            </div>

            {/* <!-- New user button  --> */}
            <button className="btn-add btn" onClick={createClickHandler}>Add new user</button>

            <Pagination />
        </section>
    );
}