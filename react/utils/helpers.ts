export const getProductsFilter = (searchValue:string) => {

	const seller_url = window.location.pathname;
	let query = "";
	const seller: string = window.location.pathname.replace("/","")

	console.log(searchValue);

	if (seller_url.indexOf(seller) >= 0){

	  query = `${seller}/${searchValue}?_c=${seller}&map=c,ft`;

	}

	console.log(query);

	const base_url = window.location.origin;
	window.location.href = `${base_url}/${query}`;

}