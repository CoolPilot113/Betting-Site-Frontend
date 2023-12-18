import socketIO from 'socket.io-client';
const socket = socketIO.connect(`${process.env.REACT_APP_SERVER_URL}`);

export default socket;
