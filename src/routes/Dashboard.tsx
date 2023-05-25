import React from 'react';
import { Badge, Divider, Group, Paper, Stack, Text } from '@mantine/core';
import { IoCalendarOutline, IoLocationOutline, IoPersonOutline, IoTimeOutline, IoTimerOutline } from 'react-icons/io5';
import { getInventory } from '../services/raffleApi';
import { type QueryClient, useQuery } from '@tanstack/react-query';
import { redirect, useLoaderData, useParams } from 'react-router-dom';
import { type Inventory } from '../types/Inventory';
import { hasSession } from '../utils/auth';

const inventoryQuery = (externalId: string): { queryKey: string[], queryFn: () => Promise<Inventory> } => ({
  queryKey: ['inventories', externalId],
  queryFn: async () => await getInventory(externalId)
});

export const loader = (queryClient: QueryClient) => async ({ params }: any) => {
  if (!hasSession()) return redirect('/session');
  const query = inventoryQuery(params.externalId);
  return await queryClient.ensureQueryData({ queryKey: query.queryKey, queryFn: query.queryFn });
};

const Dashboard = (): React.ReactElement => {
  const { externalId } = useParams() as { externalId: string };
  const initialData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof loader>>>;
  const { data: inventory } = useQuery({ ...inventoryQuery(externalId), initialData });

  console.log(inventory);

  return (
    <Stack>
      <Paper shadow="sm" p="xl">
        <Group noWrap>
          <IoLocationOutline />
          <Text>{`${inventory.city}, ${inventory.stateCode}`}</Text>
          <Divider orientation="vertical" />
          <IoCalendarOutline />
          <Text>February 14 - February 26 2023</Text>
          <Divider orientation="vertical" />
          <IoTimerOutline />
          <Text>12 days left</Text>
          <Divider orientation="vertical" />
          <IoTimeOutline />
          <Text>Dallas Time: 05:17 pm CDT</Text>
          <Divider orientation="vertical" />
          <IoPersonOutline />
          <Text>15 Volunteer(s)</Text>
        </Group>
      </Paper>

      <Paper shadow="sm" p="xl">
        <Group noWrap>
          <Text>Raffle status:&nbsp;
            <Badge color="gray" size="lg" variant="filled" radius="xs">Closed</Badge>
          </Text>
          <Text>Time left: -83 days 17 hours 13 minutes</Text>
        </Group>
      </Paper>
    </Stack>
  );
};

export default Dashboard;
