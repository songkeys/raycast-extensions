#!/usr/bin/env deno run --allow-net --allow-env

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title DuckDuckGo Email
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤖
// @raycast.packageName DuckDuckGo Email

// Documentation:
// @raycast.description Generate a random email address from DuckDuckGo Email
// @raycast.author Songkeys
// @raycast.authorURL https://github.com/Songkeys/raycast-extensions

const token = ""; // Put your token here

async function main() {
	if (!token) {
		throw new Error(
			"DuckDuckGo Token is required. Please fill in line 17 at `scripts/duck-email.ts` with your token."
		);
	}

	const res = await fetch(`https://quack.duckduckgo.com/api/email/addresses`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	if (!res.ok) {
		throw new Error(`Error: ${res.status}`);
	}
	const data = await res.json();
	if (data.address) {
		console.log(`${data.address}@duck.com`);
	} else {
		throw new Error(`Error: ${data.error}`);
	}
}

main().catch((err) => {
	console.error(err.message);
	Deno.exit(1);
});
