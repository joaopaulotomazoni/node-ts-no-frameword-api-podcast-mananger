import { PodcastTransferModel } from "../models/podcastTransferModel";
import { repoPodcast } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statusCode";

export const serviceListEpisode = async (): Promise<PodcastTransferModel> => { 
  //defino contrato
  let responseFormat: PodcastTransferModel = {
    StatusCode: 0,
    body: [],
  } 

  //busco os dados
  const data = await repoPodcast()
  
  //verifico se tem conteudo e retorno o status code 
  responseFormat = {
    StatusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  }  
  
  return responseFormat;   
}