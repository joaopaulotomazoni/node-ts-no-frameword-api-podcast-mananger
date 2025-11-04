import { Podcast } from "./podcastModel"

export interface PodcastTransferModel {
  StatusCode: number;
  body: Podcast[];
}