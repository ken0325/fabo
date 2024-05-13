import { useState } from "react"
import { createContainer } from "unstated-next"

export const useWatchSalon = () => {
    const [searchKeyword, setSearchKeyword] = useState("")
}
export const WatchSalonContainer = createContainer(useWatchSalon)