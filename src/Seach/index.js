import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { BsSearch, BsFilter } from "react-icons/bs";


function Search(props) {
    return (
        <form className='search-form'>
            <InputGroup className='main'>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText><BsSearch style={{ color: '#CACACA' }} /></InputGroupText>
                </InputGroupAddon>
                <Input style={{ color: '#CACACA' }} placeholder="Search" />
            </InputGroup>
            <BsFilter />
        </form>
    );
}

export default Search;