import {useEffect, useState} from 'react';
import io, {Socket} from 'socket.io-client';

// custom hook to handle socket connection and events based on game mode
export const useSocket = (mode: 'single' | 'multi') => {

    // state to keep track of socket instance
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        if(mode === "single") {
            // create a new socket instance with localhost url for single player mode
            const newSocket = io("http://localhost:3000");
            // set socket state
            setSocket(newSocket);
        } else if(mode === "multi") {
            // create a new socket instance with remote url for multiplayer mode
            const newSocket = io("https://euchre-multiplayer.herokuapp.com/");
            // set socket state
            setSocket(newSocket);
        }

        return () => {
            if(socket) {
                // disconnect socket on cleanup
                socket.disconnect();
            }
        };
    }, [mode]);

    return socket;
};