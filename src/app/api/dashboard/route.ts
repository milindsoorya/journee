import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [trips, notes, chatMessages] = await Promise.all([
      prisma.trip.findMany({
        orderBy: { title: "asc" },
        include: {
          owner: true,
          versions: {
            orderBy: { createdAt: "asc" },
            include: {
              notes: {
                orderBy: { timestamp: "desc" },
                include: { author: true },
              },
            },
          },
        },
      }),
      prisma.note.findMany({
        orderBy: { timestamp: "desc" },
        include: { author: true },
        take: 15,
      }),
      prisma.chatMessage.findMany({
        orderBy: { timestamp: "asc" },
        include: { author: true },
      }),
    ]);

    const serialiseDate = <T extends { timestamp: Date }>(items: T[]) =>
      items.map((item) => ({
        ...item,
        timestamp: item.timestamp.toISOString(),
      }));

    const response = {
      trips: trips.map((trip) => ({
        ...trip,
        createdAt: trip.createdAt.toISOString(),
        versions: trip.versions.map((version) => ({
          ...version,
          createdAt: version.createdAt.toISOString(),
          notes: serialiseDate(version.notes),
        })),
      })),
      notes: serialiseDate(notes),
      chatMessages: serialiseDate(chatMessages),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("[dashboard.get]", error);
    return NextResponse.json(
      { error: "Unable to load dashboard data." },
      { status: 500 }
    );
  }
}
