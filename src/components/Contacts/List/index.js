import { useState } from 'react'

function List({ allContacts }) {
    const [filterText, setFilterText] = useState('');

    const filtered = allContacts.filter((item) => {
        return Object.keys(item).some((key) => //keys kısmında keyler ayrılıyor yani fullname ve phonenumber
            item[key] 
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase())
        )
    })
    console.log("filtered",filtered);
    return (
        <div>
            <input placeholder='Filter Contact' value={filterText} onChange={(e) => {
                setFilterText(e.target.value);
            }}></input>
            <ul className='list'>
                {filtered.map((contact, i) =>
                    <li key={i}>
                        <span>
                        {contact.fullName}
                        </span>
                        <span>
                        {contact.phoneNumber}
                        </span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List
