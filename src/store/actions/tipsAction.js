import { ETipActionType } from '../tips/reducer';

export default function createTip(dataObject) {
  return { type: ETipActionType.CREATE, payload: dataObject };
}
