import {IncomingMessage, ServerResponse} from 'http'
import {serviceListEpisode} from '../services/listEpisodeService'
import { serviceFilterEpisodes } from '../services/filterEpisodeService'
import { ContentType } from '../utils/contentType'
import { PodcastTransferModel } from '../models/podcastTransferModel'

const DEFAULT_CONTENT = {"Content-type": ContentType.JSON}

export const getListEpisodios = async (request: IncomingMessage, response: ServerResponse) => {
  const content = await serviceListEpisode() 

  response.writeHead(content.StatusCode, DEFAULT_CONTENT)
  response.write(JSON.stringify(content.body))
  response.end()
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

  const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

  response.writeHead(content.StatusCode, DEFAULT_CONTENT)
  response.write(JSON.stringify(content.body))
  response.end()
} 