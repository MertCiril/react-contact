import { useState } from 'react'

function Form({addContact , allContacts}) {
    const formValues = {fullName: '', phoneNumber: ''};

    const [form, setForm] = useState(formValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) =>{
        e.preventDefault(); //form yapısı gereği sayfa yenileniyor. bunu engellemek için bu fonksiyon kullanılır.

        //girilen değerlerden biri bile boşsa işlem yapılmasını engelliyoruz.
        if(form.fullName == '' || form.phoneNumber == ''){
            return false;
        }

        addContact([...allContacts, form])
        setForm(formValues);//inputları temizlemek için
        console.log(form);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullName" placeholder='Full Name' value={form.fullName} onChange={onChangeInput}></input>

            </div>
            <div>
                <input name="phoneNumber" placeholder='Phone Number' value={form.phoneNumber} onChange={onChangeInput}></input>
            </div>
            <div className='btn'>
                <button >
                    Add
                </button>
            </div>


        </form>
    )
}

export default Form
