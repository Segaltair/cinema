import {httpGet} from "./httpService";
import {apiUrl} from "../config";

export function getGenres() {
    return httpGet(apiUrl + "/genre");
}
