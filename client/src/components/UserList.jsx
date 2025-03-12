import { useEffect, useState } from "react";
import UserListItem from "./UserListItem";
import userService from "../api/userService";

export default function UserList({
    onCreateClick
}) {
    var [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(result => {
                setUsers(result);
            });
    }, [])

    return (
        <section class="card users-container">
            {/* <!-- Search bar component --> */}
            <form class="search-form">
                <h2>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                        class="svg-inline--fa fa-user SearchBar_icon__cXpTg" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
                        </path>
                    </svg>
                    <span>Users</span>
                </h2>
                <div class="search-input-container">
                    <input type="text" placeholder="Please, select the search criteria" name="search" />
                    {/* <!-- Show the clear button only if input field length !== 0 --> */}
                    <button class="btn close-btn">
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                    <button class="btn" title="Please, select the search criteria">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div class="filter">
                    <span>Search Criteria:</span>
                    <select name="criteria" class="criteria">
                        <option value="">Not selected</option>
                        <option value="">First Name</option>
                        <option value="">Last Name</option>
                        <option value="">Email</option>
                        <option value="">Phone</option>
                    </select>
                </div>
            </form>

            {/* <!-- Table component --> */}
            <div class="table-wrapper">
                {/* <!-- Overlap components  --> */}

                {/* <!-- <div class="loading-shade"> -->
					<!-- Loading spinner  -->
					<!-- <div class="spinner"></div> --> */}
			
                {/* <!-- No users added yet  --> */}

                {/* <!-- <div class="table-overlap">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="triangle-exclamation"
							class="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
							fill="currentColor"
							d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
							></path>
						</svg>
						<h2>There is no users yet.</h2>
						</div> --> */}

                {/* <!-- No content overlap component  --> */}

                {/* <!-- <div class="table-overlap">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="triangle-exclamation"
							class="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
							fill="currentColor"
							d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
							></path>
						</svg>
						<h2>Sorry, we couldn't find what you're looking for.</h2>
						</div> --> */}

                {/* <!-- On error overlap component  --> */}

                {/* <!-- <div class="table-overlap">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="triangle-exclamation"
							class="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
							fill="currentColor"
							d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
							></path>
						</svg>
						<h2>Failed to fetch</h2>
						</div> -->
					<!-- </div> --> */}

                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" class="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    class="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    class="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    class="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" class="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
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
                        {/* <!-- Table row component --> */}
                        {users.map(user => 
                            <UserListItem
                                key={user._id}
                                {...user}
                            />)
                        }
                    </tbody>
                </table>
            </div>

            {/* <!-- New user button  --> */}
            <button class="btn-add btn" onClick={onCreateClick}>Add new user</button>

            {/* <!-- Pagination component  --> */}
            <div class="pagination position">
                <div class="limits">
                    <span>Items per page:</span>
                    <select name="limit" class="limit" value="5">
                        <option value="5">5</option>
                        <option value="5">10</option>
                        <option value="5">15</option>
                        <option value="5">20</option>
                    </select>
                </div>
                <p class="pages">1 - 1 of 1</p>
                <div class="actions">
                    <button class="btn" title="First Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-left"
                            class="svg-inline--fa fa-angles-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z">
                            </path>
                        </svg>
                    </button>

                    <button class="btn" title="Previous Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left"
                            class="svg-inline--fa fa-angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor"
                                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z">
                            </path>
                        </svg>
                    </button>
                    <button class="btn" title="Next Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                            class="svg-inline--fa fa-angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                            <path fill="currentColor"
                                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                            </path>
                        </svg>
                    </button>

                    <button class="btn" title="Last Page">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right"
                            class="svg-inline--fa fa-angles-right" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}