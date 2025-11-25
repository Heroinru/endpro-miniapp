# ENDPRO NFT Mini-App - Контекст проекта

## 🎯 ЦЕЛЬ ПРОЕКТА
Создать Farcaster Frame приложение для бесплатного минта NFT на Base blockchain с whitelist проверкой через Merkle Tree.

---

## 📊 ТЕКУЩИЙ СТАТУС

### ✅ ЧТО СДЕЛАНО (Фазы 1-4)

**1. Базовая инфраструктура:**
- ✅ GitHub репозиторий: https://github.com/Heroinru/endpro-miniapp
- ✅ Vercel deployment: https://endpro-nft.vercel.app
- ✅ Папка проекта: ~/Desktop/endpro-miniapp

**2. Фронтенд (index.html):**
- ✅ Интерфейс подключения кошелька (MetaMask/Rabby)
- ✅ Проверка сети Base Mainnet (Chain ID: 8453)
- ✅ Проверка статуса минта (hasMinted)
- ✅ Вызов контракта safeMint() с Merkle Proof
- ✅ Farcaster Frame мета-теги
- ✅ Responsive дизайн

**3. Смарт-контракт:**
- ✅ Развернут на Base Mainnet
- ✅ Адрес: 0xfcd7fd9cbC1db3f6Df77994e5AC1ef512E5Ac87A
- ✅ Функции: safeMint, hasMinted, paused, merkleRoot

**4. Конфигурация (.env.local):**
- CONTRACT_ADDRESS=0xfcd7fd9cbC1db3f6Df77994e5AC1ef512E5Ac87A
- CHAIN_ID=8453
- RPC_URL=https://mainnet.base.org

---

## ❌ ЧТО НЕ СДЕЛАНО - СЛЕДУЮЩИЙ ШАГ

### Backend API endpoints (КРИТИЧНО):

Фронтенд обращается к API, но файлов НЕТ!

Нужно создать:
1. api/stats.js - возвращает статистику whitelist
2. api/proof.js - проверяет адрес и возвращает Merkle Proof
3. data/whitelist.json - список whitelist адресов

---

## 🔧 КОНТРАКТ ABI

const CONTRACT_ABI = [
    "function safeMint(string memory uri, bytes32[] calldata merkleProof) external payable",
    "function hasMinted(address account) external view returns (bool)",
    "function paused() external view returns (bool)",
    "function merkleRoot() external view returns (bytes32)"
];

---

## 🚨 РЕШЕННЫЕ ПРОБЛЕМЫ

1. 404 при деплое - решено через vercel.json с outputDirectory: "."
2. Vercel webhook не работает - решение: ручной redeploy
3. SSH ключ GitHub - создан и добавлен

---

## 🔗 ВАЖНЫЕ ССЫЛКИ

- Production: https://endpro-nft.vercel.app
- GitHub: https://github.com/Heroinru/endpro-miniapp
- Vercel: https://vercel.com/grigoriys-projects-3e7e97b9/endpro-nft
- Contract: https://basescan.org/address/0xfcd7fd9cbC1db3f6Df77994e5AC1ef512E5Ac87A

---

## 🎯 СЛЕДУЮЩИЕ ШАГИ (Фаза 5)

1. Создать api/stats.js
2. Создать api/proof.js  
3. Добавить whitelist данные
4. Протестировать минт

Дата: 22 ноября 2025
Статус: Фаза 4 завершена, начало Фазы 5
