import * as types from './../constants/ActionType'

export const actionAddToCart = (product, quantity) =>
{
	return{
		type : types.ADD_TO_CART,
		product,
		quantity
	}
}
export const actionChangeMessage = (message) =>
{
	return{
		type : types.CHANGE_MESSAGE,
		message
	}
}
export const actionDeleteProductInCart = (product) =>
{
	return{
		type : types.DELETE_PRODUCT_IN_CART,
		product
	}
}
export const actionUpdateProductInCart = (product, quantity) =>
{
	return{
		type : types.UPDETE_PRODUCT_IN_CART,
		product,
		quantity
	}
}