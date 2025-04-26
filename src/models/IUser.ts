export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
}
export interface Geo {
	lat: string;
	lng: string;
}
export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}