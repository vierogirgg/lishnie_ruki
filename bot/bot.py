import asyncio
import logging
import sys
from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart
from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton

import os
from dotenv import load_dotenv

load_dotenv()
API_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN')

# Настройка логирования
logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher()

@dp.message(CommandStart())
async def command_start_handler(message: types.Message):
    # Кнопка для открытия Mini App
    # Ссылка на твой GitHub Pages
    web_app = WebAppInfo(url="https://vierogirgg.github.io/lishnie-ruki/") 
    
    kb = [
        [KeyboardButton(text="Открыть Лишние Руки 🐾", web_app=web_app)]
    ]
    markup = ReplyKeyboardMarkup(keyboard=kb, resize_keyboard=True)
    
    welcome_text = (
        f"Привет, {message.from_user.full_name}! 🐾\n\n"
        "Это «Лишние Руки» — платформа помощи приютам.\n"
        "Помогай животным, находи друзей и становись нужным.\n\n"
        "Нажми на кнопку ниже, чтобы войти в приложение!"
    )
    await message.answer(welcome_text, reply_markup=markup)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())    asyncio.run(main())