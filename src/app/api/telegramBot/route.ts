import { Telegraf } from 'telegraf';
import { NextRequest, NextResponse } from 'next/server';
import { writeData } from '@/service/dbmanager';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.start(async (ctx) => {
  const telegramId = ctx.from?.id;
  const text = ctx.message?.text;

  if (telegramId && text) {
    const parameter = text.replace('/start ', '').trim();

    if (parameter) {
      await writeData(parameter, telegramId.toString());
      await ctx.reply(' ✓ Вы авторизованы');
    } else {
      await ctx.reply(' ⨯ Error: Invalid parameter.');
    }
  } else {
    await ctx.reply('Error: Could not record your data.');
  }
});

bot.on('message', async (ctx) => {
  await ctx.reply('Сообщения обрабатываются только после /start с нужным параметром.');
});

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  await bot.handleUpdate(await req.json());
  return new NextResponse('OK', { status: 200 });
}
