import axios from 'axios'
import { dbService } from '../services/db.service'

const PRICE_HISTORY_KEY = 'price-historyDB'
const TRANSACTIONS_HISTORY_KEY = 'transactions-historyDB'

export const bitcoinService = {
	getRate,
	getPriceHistory,
	getTransactionsHistory,
}

async function getRate(coins) {
	const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
	const { data } = await axios.get(url)
	return data
}

async function getPriceHistory() {
	let priceHistory = await dbService.query(PRICE_HISTORY_KEY)
	
    if (!priceHistory || !priceHistory.length) {
		const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
		const { data } = await axios.get(url)
		priceHistory = data.values
		await dbService.insert(PRICE_HISTORY_KEY, data.values)
	}
	return priceHistory
}

async function getTransactionsHistory() {
	let transactionsHistory = await dbService.query(TRANSACTIONS_HISTORY_KEY)
	
    if (!transactionsHistory || !transactionsHistory.length) {
		const url = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
		const { data } = await axios.get(url)
		await dbService.insert(TRANSACTIONS_HISTORY_KEY, data.values)
		transactionsHistory = data.values
	}
	return transactionsHistory
}
