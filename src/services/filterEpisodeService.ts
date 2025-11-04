import { repoPodcast } from "../repositories/podcastsRepository"
import { PodcastTransferModel } from "../models/podcastTransferModel"
import { StatusCode } from "../utils/statusCode"

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

  //define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    StatusCode: 0,
    body: [],
  } 

  //busco os dados
  const queryString = podcastName?.split("?p=")[1] || ''
  const data = await repoPodcast(queryString)

  //verifico se tem conteudo e retorno o status code 
  responseFormat = {
    StatusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  }  

  return responseFormat;
  
}