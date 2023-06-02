import { extendTheme } from "@chakra-ui/react"

const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    style: {
        global: {
            body: {
                margin: 0,
                "font-family":
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'"
            },

            code: {
                "font-family":
                    "source-code-pro, Menlo, Monaco, 'Courier New'"
            }
        }
    }
}

export default extendTheme(theme);