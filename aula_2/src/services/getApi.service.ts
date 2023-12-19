import axios from 'axios';
import { postsModel } from '../models/posts.model';

export class getApi {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  async getApi(): Promise<postsModel[]> {
    const data = await axios.get(this.url).then((res) => res.data);
    return data;
  }
}
