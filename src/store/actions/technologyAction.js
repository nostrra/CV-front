import { ETechnologyActionType } from '../technology/reducer';

export default function createTechnology(dataObject) {
  return { type: ETechnologyActionType.CREATE, payload: dataObject };
}
