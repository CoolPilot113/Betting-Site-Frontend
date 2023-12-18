import { ADD_MESSAGE } from '../components/redux/messages/types';
import store from '../components/redux/store';

function configSocket(socket) {
  socket.on('connect', () => {});
  socket.on('messageResponse', (data) => {
    store.dispatch({
      type: ADD_MESSAGE,
      payload: data,
    });
  });
}

export default configSocket;
