import {httpGet} from "./httpService";
import {CINEMA_URL} from "../utils/constants";

export function getGenres() {
    return httpGet(CINEMA_URL + "/genre");
}
