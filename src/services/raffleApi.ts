import axios from 'axios';
import { type Inventory } from '../types/Inventory';
import { getToken } from '../utils/auth';

const BASE_URL = 'https://api.qa.alsac.stjude.org/int-tem-v1/raffle/v1';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken() ?? ''}`
  }
});

export const getInventory = async (externalId: string): Promise<Inventory> => {
  const { data } = await client.get(`${BASE_URL}/Inventories/${externalId}`);
  return data;
};
