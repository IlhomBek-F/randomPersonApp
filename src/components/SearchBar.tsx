import { Button, Input, Space } from "antd"
import '../styles/searchBar.css';
import { useRef } from "react";

function SearchBar({handleSearch, loading}) {
    const inputRef = useRef(null);

    return (
        <Space.Compact style={{ width: '100%' }} className="search-bar">
         <Input ref={inputRef}  placeholder="search by username..."/>
         <Button type="primary" onClick={() => handleSearch(inputRef.current.input.value)} loading={loading}>Поиск</Button>
       </Space.Compact>
    )
}

export { SearchBar }