import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatarMe from './avatar1.png'
import avatarFriend from './avatar2.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: { avatar: string, name: string },
    message: { text: string, time: string },
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatarMe, // можно менять
        name: 'Ivan John Doe',  // можно менять
    },
    message: {
        text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Переписали океана имеет жизни, пустился несколько его, оксмокс напоивший но путь большого ведущими подзаголовок за переулка послушавшись города своих пор.', // можно менять 
        time: '21:14', // можно менять
    },      
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatarFriend, // можно менять
        name: 'Scrooge McDuck', // можно менять
    }, 
    message: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nam ex, corrupti hic officia asperiores velit totam rerum cupiditate, suscipit labore mollitia cum expedita fugit voluptatem in laudantium alias ipsam?', // можно менять
        time: '22:00', // можно менять
        
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>

                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
