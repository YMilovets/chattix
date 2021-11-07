import React from 'react'
import { useSelector } from 'react-redux';
import ListUsers from './listUsers';
import ListUserItem from './listUserItem';
import ListMsg from './listMsg';
import ListMsgItem from './listMsgItem';

import FormSendMsg from './formSendMsg';
export default function Chat({socket}) {
    const {listMsg: store, listUsers: users} = useSelector(state => state);

    return (
        <div className="chat-workspace m-3 d-flex flex-grow-1">
            <ListUsers>
                {users.map(elem => <ListUserItem key={elem.id} nickname={elem.nickname} />)}
            </ListUsers>
            <div className="list-msg w-100 ms-3 d-flex flex-column">
                <ListMsg>
                    {store.map((elem, i) => <ListMsgItem key={i} msgItem={elem} />)}
                </ListMsg>
                <FormSendMsg {...{socket}} />
            </div>
        </div>
    )
}
