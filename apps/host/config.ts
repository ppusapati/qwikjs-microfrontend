export interface RemoteData {
	name: string;
	url: string;
	secondsOfDelay: number;
	seamsColor: string;
	hideLabel?: true;
	queryParam?: boolean;
}

export const remotes: Record<string, RemoteData> = {
	admin: {
		name: 'admin',
		url: 'http://localhost:5174/',
		secondsOfDelay: 0,
		seamsColor: '#007d81',
	},
	hero: {
		name: 'hero',
		url: 'http://localhost:5175/',
		secondsOfDelay: 0,
		seamsColor: '#800006',
		queryParam: true,
	},

};