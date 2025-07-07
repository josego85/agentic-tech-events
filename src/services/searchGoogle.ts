import { config } from '../config';
import { ResultSearch } from '../interfaces/search';
import axios from 'axios';

async function searchGoogle(query: string): Promise<ResultSearch[]> {
  const resp = await axios.get('https://serpapi.com/search', {
    params: {
      q: query,
      api_key: config.SERPAPI_KEY,
      engine: 'google',
      hl: 'es'
    }
  });
  
  return resp.data.organic_results as ResultSearch[] || [];
}

export { searchGoogle };