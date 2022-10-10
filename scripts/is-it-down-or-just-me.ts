#!/usr/bin/env deno run --allow-net

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Is It Down or Just Me
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤖
// @raycast.packageName Is It Down or Just Me
// @raycast.argument1 { "type": "text", "placeholder": "url" }

// Documentation:
// @raycast.description Check if a website is really down or just me
// @raycast.author Songkeys
// @raycast.authorURL https://github.com/Songkeys/raycast-extensions

async function main() {
	const url = Deno.args[0];
	const res = await fetch(
		`https://downforeveryoneorjustme.com/api/httpcheck/${url}`
	);
	if (!res.ok) {
		throw new Error(`Error: ${res.status}`);
	}
	const data = await res.json();
	if (data.isDown) {
		console.log(`❌ It is DOWN.`);
	} else {
		console.log(`✅ It is UP.`);
	}
}

main().catch((err) => {
	console.error(err.message);
	Deno.exit(1);
});
