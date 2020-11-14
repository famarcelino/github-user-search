import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import './styles.scss';
import { User } from './types';

const BASE_URL = 'https://api.github.com/users';

const Search = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState<User>();

    const handleSearch = (search: string) => {
        setIsLoading(true);
        axios(`${BASE_URL}/${search}`)
            .then(response => {
                setUserInfo(response.data);
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="search-container">
            <Form onSearch={handleSearch} />
            {
                userInfo && (
                    <UserInfo user={userInfo} isLoading={isLoading} />
                )
            }

        </div>
    );
}

export default Search;