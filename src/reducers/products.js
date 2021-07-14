var initialState = [
	{
		id : 1,
		name : 'iphone xs max',
		image : 'https://product.hstatic.net/200000148393/product/xs-max-vang_7ab2905eb18648dc9c7657da69dc0339_master.png',
		description : 'sản phẩm do Apple sản xuất',
		price : 1000,
		inventory : 10,
		rating : 4
	},
	{
		id : 2,
		name : 'Samsung galaxy note 20',
		image : 'https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-trang-600x600-1-200x200.jpg',
		description : 'sản phẩm do Samsung sản xuất',
		price : 800,
		inventory : 15,
		rating : 3
	},
	{
		id : 3,
		name : 'OPPO FIND X2',
		image : 'https://didongviet.vn/blog/wp-content/uploads/2020/03/pin-OPPO-Find-X2-Pro-didongviet.jpg',
		description : 'sản phẩm do OPPO sản xuất',
		price : 600,
		inventory : 35,
		rating : 4
	}
]
const products = (state = initialState, action) =>
{
	switch(action.type)
	{
		default : return [...state]
	}
}
export default products