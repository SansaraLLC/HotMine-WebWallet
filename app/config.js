var credentials = require("./credentials.js");

module.exports = {
	cookiePassword: "0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
	demoSite: false,
	coin: "BTC",

	rpcBlacklist:[
		"stop",
		"savemempool",
		"addnode",
		"disconnectnode",
		"dumpprivkey",
		"dumpwallet",
		"setban",
		"clearbanned",
		"setnetworkactive",
		"lockunspent",
		"move",
		"removeprunedfunds",
		"rescanblockchain",
		"encryptwallet",
		"backupwallet",
		"importwallet",
		"walletlock",
		"walletpassphrase",
		"walletpassphrasechange",
		"verifychain",
		"pruneblockchain"
	],

	site: {
		blockTxPageSize:20,
		browseBlocksPageSize:20
	},

	credentials: credentials,

	// Edit "ipWhitelistForRpcCommands" regex to limit access to RPC Browser / Terminal to matching IPs
	ipWhitelistForRpcCommands:/^(127\.0\.0\.1)?(\:\:1)?$/,

	googleAnalyticsTrackingId:"",
	sentryUrl:"",

	donationAddresses:{
		coins:["BTC"],
		"BTC":{address:"1Foy3EvZyo8RwYz9ZwYUw8BThCZWBGQfKr", urlPrefix:"bitcoin:"}
	},

	headerDropdownLinks: {
		title:"Related Sites",
		links:[
			{name: "HotMine", url:"https://hotmine.io", imgUrl:"/img/logo/logo.png"}
		]
	}
};
