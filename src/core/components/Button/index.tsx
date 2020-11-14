import React from 'react';

type Props = {
    text: string;
}

const Button = ({text} : Props) => (
    <button type="submit" className="btn btn-primary">
        {text}
    </button>
);

export default Button;
