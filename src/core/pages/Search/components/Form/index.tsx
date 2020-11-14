import React, { useState } from 'react';
import Button from '../../../../components/Button';
import './styles.scss';

type Props = {
    onSearch: (search: string) => void;
}

const Form = ({onSearch}: Props) => {

    const [search, setSearch] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(search);
    }

    return (
        <div className="form-container">
            <h1 className="form-title">Encontre um perfil Github</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Usuário Github"
                    onChange={handleChange}
                />
                <Button text="Encontrar" />
            </form>
        </div>
    );
}

export default Form;