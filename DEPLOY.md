# 🚀 Быстрый деплой на Vercel

## Шаг 1: Подготовка проекта

✅ Проект уже готов к деплою:
- Next.js 14 настроен
- TypeScript конфигурация корректна
- Сборка проходит успешно
- ESLint настроен

## Шаг 2: Загрузка на GitHub

1. **Создайте репозиторий на GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cmpro.kz.git
   git push -u origin main
   ```

## Шаг 3: Деплой на Vercel

### Вариант A: Через веб-интерфейс (рекомендуется)

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Войдите через GitHub**
3. **Нажмите "New Project"**
4. **Выберите ваш репозиторий `cmpro.kz`**
5. **Настройки (оставьте по умолчанию):**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. **Нажмите "Deploy"**

### Вариант B: Через Vercel CLI

```bash
# Установка CLI
npm i -g vercel

# Вход в аккаунт
vercel login

# Деплой
vercel

# Продакшен деплой
vercel --prod
```

## Шаг 4: Настройка домена

1. **В панели Vercel → Settings → Domains**
2. **Добавьте ваш домен:**
   - `cmpro.kz` (основной домен)
   - `www.cmpro.kz` (с www)
3. **Настройте DNS записи у провайдера:**
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

## Шаг 5: Переменные окружения (опционально)

В Vercel Dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_ID=XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=77773323676
```

## Шаг 6: Проверка деплоя

✅ **Что должно работать:**
- Главная страница: `https://your-domain.vercel.app`
- Курсы: `/courses/python`, `/courses/golang`, etc.
- Многоязычность: `/ru/`, `/kk/`
- Темная тема
- Адаптивность
- PWA функционал

## Автоматические деплои

После настройки:
- **Push в main** → автоматический деплой
- **Pull Request** → preview деплой
- **Каждый коммит** → автоматическая сборка

## Мониторинг

- **Vercel Analytics**: Производительность
- **Core Web Vitals**: Автоматический мониторинг
- **Error Tracking**: Отслеживание ошибок

## Полезные команды

```bash
# Локальная разработка
npm run dev

# Сборка
npm run build

# Проверка кода
npm run lint

# Деплой через CLI
vercel --prod
```

## Поддержка

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

**🎉 Ваш сайт готов к работе!**
