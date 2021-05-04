import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateTheme } from "../redux/actions/user.actions";

export default function Toggle() {
    const dispatch = useDispatch()
    const { colorMode, toggleColorMode } = useColorMode()

    const handleClick = (colorMode) => {
        console.log(colorMode)
       dispatch(updateTheme(colorMode === "light" ? "dark" : "light"))
       toggleColorMode()
    }

    return (
        <>
            <Button onClick={() => handleClick(colorMode)}>
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </>
    )
}
