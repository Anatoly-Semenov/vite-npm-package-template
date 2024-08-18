import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
	/*
		 Todo: This is example build config
					 Don't forget to configure it for yourself
	*/
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/index.ts"),
			name: "types",
			fileName: format => `index.${format}.js`
		},
		commonjsOptions: {
			exclude: ["./src/*"]
		}
	}
})
