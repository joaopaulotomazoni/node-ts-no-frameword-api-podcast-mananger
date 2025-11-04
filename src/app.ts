import * as http from "http";
import {getFilterEpisodes, getListEpisodios} from './controllers/podcastsController'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMethods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  
    const baseURL = request.url?.split("?")[0]
  
  if(request.method===HttpMethod.GET && baseURL === Routes.LIST)
  {
    await getListEpisodios(request, response);
  }
  else if((request.method===HttpMethod.GET && baseURL === Routes.EPISODE ))
  {
    await getFilterEpisodes(request, response);
  }
}