import { NextResponse } from 'next/server';
import { Telegraf } from 'telegraf';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST() {
  const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);
  // Используем VERCEL_URL из env или fallback на production URL
  const baseUrl = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || '';
  const webhookUrl = `${baseUrl}/api/telegramBot`;

  // Проверяем, установлен ли уже вебхук
  const webhookInfo = await bot.telegram.getWebhookInfo();
  if (webhookInfo.url === webhookUrl) {
    return NextResponse.json({ message: `Webhook уже установлен на ${webhookUrl}` });
  }

  try {
    await bot.telegram.setWebhook(webhookUrl);
    return NextResponse.json({ message: `Webhook установлен на ${webhookUrl}` });
  } catch (error) {
    console.error('Ошибка установки вебхука:', error);
    return NextResponse.error();
  }
}
