import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:3003');

export default socket;
