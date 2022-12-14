import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const Responsive = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;