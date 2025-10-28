"use client";

import useSWR from "swr";
import type { DashboardResponse } from "@/types/dashboard";

const fetcher = async (url: string): Promise<DashboardResponse> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch dashboard data');
  }
  return res.json();
};

export const useDashboardData = () => {
  const swr = useSWR<DashboardResponse>('/api/dashboard', fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
  });

  return swr;
};

export default useDashboardData;
