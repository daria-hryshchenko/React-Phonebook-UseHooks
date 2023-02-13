import React from "react";
import { FilterWrapper, Title, Input } from "./FilterStyle";

function Filter({ onFilterChange, value }) {
    return (
        <FilterWrapper>
        <Title>Find contacts by name</Title>
        <Input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </FilterWrapper>
    )
}

export default Filter;

