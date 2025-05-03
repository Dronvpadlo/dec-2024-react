export interface IReqResIn {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: IData[];
	support: Support;
}
export interface IData {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}
export interface Support {
	url: string;
	text: string;
}