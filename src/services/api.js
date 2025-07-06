import axios from 'axios'
import { KANBAN_API_URL } from './apiConfig'
import { getToken } from './auth'

// Получить все карточки
export async function fetchCards() {
	try {
		const token = getToken()
		const { data } = await axios.get(KANBAN_API_URL, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return data.tasks
	} catch (error) {
		throw new Error(error.response?.data?.error || error.message)
	}
}

// Добавить карточку
export async function postCard(card) {
	try {
		const token = getToken()
		const { data } = await axios.post(KANBAN_API_URL, card, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': '',
			},
		})
		return data.task
	} catch (error) {
		throw new Error(error.response?.data?.error || error.message)
	}
}

// Получить конкретную карточку
export async function getCard(id) {
	try {
		const token = getToken()
		const { data } = await axios.get(`${KANBAN_API_URL}${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return data.task
	} catch (error) {
		throw new Error(error.response?.data?.error || error.message)
	}
}

// Обновить карточку
export async function editCard(id, card) {
	try {
		const token = getToken()
		const { data } = await axios.put(KANBAN_API_URL + id, card, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': '',
			},
		})
		return data.task
	} catch (error) {
		throw new Error(error.response?.data?.error || error.message)
	}
}

// Удалить карточку
export async function deleteCard(id) {
	try {
		const token = getToken()
		const { data } = await axios.delete(KANBAN_API_URL + id, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return data
	} catch (error) {
		throw new Error(error.response?.data?.error || error.message)
	}
}
