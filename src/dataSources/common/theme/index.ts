// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    colors: {
        teal: {
            500: "#b2f5ea",
        },
    },
})
