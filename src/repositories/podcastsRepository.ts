import fs from 'fs'
import path from 'path'
import { Podcast } from '../models/podcastModel'


const pathData = path.join(__dirname,"../repositories/repositories.json")

export const repoPodcast = async (podcastName?: string): Promise<Podcast[]> => {
  const language = 'utf-8'

  const data = fs.readFileSync(pathData, language)//le o arquivo desejado
  let jsonFile = JSON.parse(data)//converte texto em json

  if(podcastName){
    jsonFile = jsonFile.filter((podcast: Podcast) => podcast.podcastName ===podcastName)
  }

  return jsonFile;
}