import React, { useState } from 'react'

import Chat from './chat';
import FormSignInChat from './formSignInChat';

export default function Content({socket}) {
    const [isAuth, setIsAuth] = useState(false);

    if (isAuth)
        return (
           <Chat {...{socket}} />
        )
    return (
        <FormSignInChat {...{socket, setIsAuth}} />
    )
}