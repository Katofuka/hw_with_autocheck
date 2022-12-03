import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event :ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=> void // need to fix any
    onBlur: ()=>void // need to fix any
    onEnter: (e:KeyboardEvent<HTMLInputElement>)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = error === '' ? style.input : style.errorInput // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={style.greetingForm}>
            <div className={style.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={style.inputAndButtonContainer}>
                <div>
                    <input
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                        autoComplete={'off'}                        
                    />
                    <div id={'hw3-error'} className={style.error}>
                        {error}
                    </div>
                </div>

                <button
                    id={'hw3-button'}
                    onClick={addUser}
                    className={style.button}
                    disabled={!name.trim()}
                >
                    add
                </button>
            </div>

            {lastUserName && (
                <div className={style.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
